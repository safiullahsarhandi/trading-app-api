const pathAlias = require('path-alias');
const {User} = require('../../../Models');
const Auth = require('../../../Services/Auth');
const { apiSuccessWithData, apiSuccess } = require('../../../Utils/apiHelpers');
const { getAccessToken } = require('../../../Utils/helpers');


module.exports.index = async (req,res)=>{
    try{
        let token = getAccessToken(req.headers['authorization']);
        let user = await Auth.user(token);
        let data = apiSuccessWithData('account detail',user);
        return res.json(data);
    }catch(error){
        console.log(error);
        res.status(401).json(error)    
    }
};

module.exports.update = ()=> {
    
};

module.exports.updateSubscriptionPrice = async (req,res)=>{
    let token = getAccessToken(req.headers['authorization']);
    let user = await Auth.user(token);
    user.subscription_price = req.body.subscription_price;
    await user.save();
    let data = apiSuccess('subscription price updated successfully');
    return res.json(data);
};