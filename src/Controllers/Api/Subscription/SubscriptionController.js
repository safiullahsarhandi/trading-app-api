const Auth = require("../../../Services/Auth");
const { User } = require("../../../Models");
const { apiSuccess } = require("../../../Utils/apiHelpers");
const {getAccessToken} = require('../../../Utils/helpers');

module.exports.subscribe = async (req,res)=>{
    let { user_id } = req.body;
    let token = getAccessToken(req.headers['authorization']);
    let subscriber = await Auth.user(token);
    let user = await User.findByPk(user_id);
    user.addSubscriber(subscriber);
    let data = apiSuccess('subscribed successfully');
    return res.json(data);
};