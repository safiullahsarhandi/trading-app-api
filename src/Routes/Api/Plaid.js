const express = require("express");
const router = express.Router();

const PlaidController = require('../../Controllers/Api/Plaid/PlaidController');
router.post('/set_access_token',PlaidController.setAccessToken);
router.post('/create_link_token',PlaidController.createLinkToken);
router.post('/info',PlaidController.getPlaidInfo);
module.exports = router;