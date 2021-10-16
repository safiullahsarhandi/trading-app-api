const {Op} = require('sequelize');
var jwt = require('jsonwebtoken');
let pathAlias = require('path-alias');
const {AccessToken} = pathAlias('src/Models');
const bcrypt = require('bcrypt');
const moment = require('moment');
const sequelize  = require('../Models');
const Auth = require('../Middlewares/Auth');
const {getTimestamp, ucFirst} = pathAlias('src/Utils/helpers');

module.exports.attempt = async (model,credentials,uniqueColumn = 'email')=>{
        let { email } = credentials;
        let where = {};
        where[uniqueColumn] = credentials[uniqueColumn];
        
        let user = await model.scope('withPassword').findOne({
            where,
        });
        if(!user)
            return {
                attempted : false,
            };
        
        let isValidPassword = await bcrypt.compare(credentials.password, user.password);
        if(!isValidPassword){
            return {
                attempted: false
            };
        }
        return {
            attempted : true,
            user, 
        };
    }
module.exports.createToken =async (user,modelName = 'User') => {
        var token = await jwt.sign({ 
            id: user.id,
            iat: Math.floor(Date.now() / 1000) - 30  }, 'dooda_auth_secret');        
        await AccessToken.create({
            token,
            user_id : user.id, 
            provider : ucFirst(modelName), 
            expired_at : moment().add(1, 'years')
        });     
        return token;
    }
module.exports.user = async (token)=>{
        let accessToken = await AccessToken.findOne({
            where : {
                token,
                is_revoked : 0,
            }
        });
        let user = null;
        if(accessToken){
            user = await sequelize[accessToken.provider].findByPk(accessToken.user_id);
            return user ? user: null;            
        }   
        
        return user;     
}
module.exports.logout = async (token) => {
        let accessToken = await AccessToken.findOne({
            where : {
                token,
                is_revoked : 0,
            }
        });
        if(accessToken){
            accessToken.is_revoked = 1;
            await accessToken.save();
            return true;
        }
        return false;
}

// module.exports = {attempt,logout,createToken,getUser}


