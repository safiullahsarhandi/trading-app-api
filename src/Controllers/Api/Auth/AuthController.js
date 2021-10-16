const pathAlias = require('path-alias');
const {User} = pathAlias('src/Models');
const {Op} =  require('sequelize');
const bcrypt = require('bcrypt');
const {apiError, apiSuccessWithData, apiSuccess } = require('../../../Utils/apiHelpers');
const { getAc, getAccessToken } = require('../../../Utils/helpers');
const Auth =  pathAlias('src/Services/Auth');

module.exports.login = async (req,res)=>{
	let {attempted, user} = await Auth.attempt(User,req.body,'username');
	if(attempted){
						
		let token = await Auth.createToken(user,'User');
		let data = apiSuccessWithData('login successfully',{
			user,
			token, 
		});
		return res.json(data);
	}
	let data = apiError('invalid credentials');
	return res.status(409).json(data);


}

module.exports.register = async (req,res)=>{
	let salt = bcrypt.genSaltSync(10);

	req.body.password = bcrypt.hashSync(req.body.password,salt);
	let user = await User.create(req.body);
	// console.log(user);
	let data = apiSuccess('Registered succesfully');
	return res.json(data);
}

module.exports.logout = async (req,res)=>{
	
	let token = getAccessToken(req.headers['authorization']);
	
	let result = await Auth.logout(token);
	let data;
	if(result){
		data = apiSuccess('logout successfully');	
		return res.json(data);
	}
	data = apiError('Invalid token');
	return res.json(data);
	
	


}