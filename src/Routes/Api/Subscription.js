const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../../Middlewares/Auth');
const SubscribeValidator = require('../../Validators/Subscription/SubscribeValidator');
const SubscriptionController = require('../../Controllers/Api/Subscription/SubscriptionController');
router.post('/',[AuthMiddleware,SubscribeValidator],SubscriptionController.subscribe);

module.exports = router;