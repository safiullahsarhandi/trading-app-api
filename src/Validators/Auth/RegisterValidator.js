let pathAlias = require('path-alias');
let {apiValidationErrors} = pathAlias('src/Utils/apiHelpers');
let Validator = require('../../Utils/CustomValidations');

module.exports = async (req,res,next)=>{   
    
	await Validator(req.body, {
        name : 'required',
		username : 'required|unique:User,username',
		email : 'required|email|unique:User,email',
		password : 'required'
	},(err, status) => {
		
		if (!status) {
			let data = apiValidationErrors(err.errors);
			return res.status(422).json(data);
        }   
		next();
    });
};