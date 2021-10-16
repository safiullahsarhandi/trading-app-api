const {User, PasswordReset} = require("../../../Models");
const { apiError, apiSuccess } = require("../../../Utils/apiHelpers");
const Mail = require('../../../Services/Email');
const { mt_rand } = require("../../../Utils/helpers");
const bcrypt =  require('bcrypt');

module.exports.verifyEmail = async(req,res)=> {
    let {email,username} = req.body;
    let user = await User.findOne({
        where : {
            email
        }
    });

    if(!user){
        let data = apiError('user doesn\'t exists. please provide valid email address');
        return res.status(409).json(data);
    }
    let code = mt_rand(11111,99999);
    PasswordReset.destroy({
        where : {
            email,
        }
    });
    await PasswordReset.create({
        code,
        email,
    });
    await Mail.passwordResetMail(user.email,code);


    let data = apiSuccess('password reset code has been sent on email successfully');
    return res.json(data);
}

module.exports.verifyCode = async(req,res)=> {
    let {email,code} = req.body;
    let user = await User.findOne({
        where : {
            email
        }
    });

    if(!user){
        let data = apiError('user doesn\'t exists. please provide valid email address');
        return res.status(409).json(data);
    }
    let password = await PasswordReset.findOne({
        where : {
            email,
            code,
        }
    });
    
    if(!password){
        let data = apiError('invalid code given');
        return res.status(409).json(data);
    }
        
    let data = apiSuccess('code has been verified successfully');
    return res.json(data);
}

module.exports.updatePassword = async(req,res)=> {
    // get email and code from request; 
    let {email,code,password} = req.body;
    let user = await User.scope('withPassword').findOne({
        where : {
            email
        }
    });
    
    if(!user){
        let data = apiError('user doesn\'t exists. please provide valid email address');
        return res.status(409).json(data);
    }
    
    let passwordModel = await PasswordReset.findOne({
        where : {
            email,
            code,
        }
    });
    // check whether code is valid or not
    if(!passwordModel){
        let data = apiError('invalid code given');
        return res.status(409).json(data);
    }
    // generate password 
    let salt = bcrypt.genSaltSync(10);
    
    user.password = bcrypt.hashSync(password,salt);
    // update password
    await user.save();

    // we changed the password and now delete the code stored in db
    passwordModel.destroy();
        
    let data = apiSuccess('password has been updated successfully');
    return res.json(data);
}