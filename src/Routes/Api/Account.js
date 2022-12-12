const { response } = require('express');
const express = require('express');
const router = express.Router();
const authMiddleware = require('../../Middlewares/Auth');
const AccountController = require('../../Controllers/Api/Account/AccountController');
const updatePriceValidator = require('../../Validators/Account/SubscriptionPriceValidator'); 
router.get('/',authMiddleware,AccountController.index);
router.post('/update-subscription-price',[authMiddleware,updatePriceValidator],AccountController.updateSubscriptionPrice);

module.exports = router;