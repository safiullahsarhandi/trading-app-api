
const {User, Review} = require('../../../Models');
const Auth = require('../../../Services/Auth');
const { apiSuccessWithData, apiError, apiSuccess } = require('../../../Utils/apiHelpers');
const { getAccessToken } = require('../../../Utils/helpers');

module.exports.store = async (req,res)=>{
    let {user_id} = req.body;
    let token = getAccessToken(req.headers['authorization']);
    let loginUser = await Auth.user(token);
    let user = await User.findByPk(user_id);
    await user.createReview({
        rating : req.body.rating,
        review : req.body.review, 
        reviewed_by : loginUser.id
    });
    let data = apiSuccess('review given successfully');
    res.json(data);

};

module.exports.show = async (req,res)=>{
    let {id} = req.params; 
    
    let user = await User.findByPk(id,{
        include : [{
            model: Review,
            as: 'reviews'
        }]
    });
    if(!user){
        let data = apiError('user did not found');
        return res.status(404).json(data);
    }
   
    let data = apiSuccessWithData('user reviews', user);
    res.json(data);
};