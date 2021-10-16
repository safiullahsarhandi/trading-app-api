const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../../Middlewares/Auth');
const BookmarkController = require('../../Controllers/Api/Bookmark/BookmarkController');
const BookmarkCreateValidator = require('../../Validators/Bookmark/BookmarkCreateValidator');
router.get('/',AuthMiddleware,BookmarkController.index);
router.post('/',[AuthMiddleware,BookmarkCreateValidator],BookmarkController.store);

module.exports = router;