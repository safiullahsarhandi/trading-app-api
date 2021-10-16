const pathAlias = require('path-alias');
const {AccessToken} = pathAlias('src/Models');
const {getAccessToken} = pathAlias('src/Utils/helpers');
const Auth = pathAlias('src/Services/Auth');
const {Op} = require('sequelize');

module.exports = async (req,res,next)=> {
    let {authorization} =  req.headers;
    if(!authorization){
        return res.status(401).json({message : 'unauthenticated'});
    }
    let token = getAccessToken(authorization);
    if(!token){
        return res.status(401).json({message : 'unauthenticated'});        
    }
    
    try {
        let user = await Auth.user(token);
        if(user){
            next();
        }else{
            return res.status(401).json({message : 'unauthenticated'});
            
        }
    } catch (error) {
        console.log(error);
        return res.status(401).json({message : 'unauthenticated'});

    }


}