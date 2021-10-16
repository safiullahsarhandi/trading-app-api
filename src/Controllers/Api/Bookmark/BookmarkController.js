const {User, Bookmark} = require('../../../Models');
const Auth = require('../../../Services/Auth');
const { apiSuccessWithData, apiSuccess } = require('../../../Utils/apiHelpers');
const { getAccessToken } = require('../../../Utils/helpers');
module.exports.index = async (req,res)=>{
    let token = getAccessToken(req.headers['authorization']);
    let bookmarks = await (await Auth.user(token)).getBookmarks();  
    let data = apiSuccessWithData('bookmarked users',{bookmarks});
    return res.json(data);
};

module.exports.store = async (req,res)=>{
    let token = getAccessToken(req.headers['authorization']);
    let user = await Auth.user(token);  
    let bookmarkUser = await User.findByPk(req.body.user_id);
    let bookmark = await Bookmark.findOne({
        where : {
            user_id : user.id,
            bookmarked_id : req.body.user_id
        }
    });
    let msg;
    if(bookmark){
        await bookmark.destroy();
        msg  = 'unbookmarked successfully';
    }else{
        await user.addBookmark(bookmarkUser);
        msg  = 'bookmarked successfully';
    }
    let data = apiSuccess(msg);
    return res.json(data);
};