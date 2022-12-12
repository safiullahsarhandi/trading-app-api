const express = require('express');
const router = express.Router();
const AuthController = require('../../Controllers/Api/Auth/AuthController.js');
const PasswordResetController = require('../../Controllers/Api/Auth/PasswordResetController.js');
const authMiddleware = require('../../Middlewares/Auth');
const LoginValidator = require('../../Validators/Auth/LoginValidator.js');
const RegisterValidator = require('../../Validators/Auth/RegisterValidator.js');
const VerifyEmailValidator = require('../../Validators/PR/VerifyEmailValidator.js');
const VerifyCodeValidator = require('../../Validators/PR/VerifyCodeValidator.js');
const UpdatePasswordValidator = require('../../Validators/PR/UpdatePasswordValidator.js');

router.post('/login',LoginValidator,AuthController.login);
router.post('/register',RegisterValidator,AuthController.register);
router.post('/logout',authMiddleware,AuthController.logout);
router.post('/verify/email',VerifyEmailValidator,PasswordResetController.verifyEmail);
router.post('/verify/code',VerifyCodeValidator,PasswordResetController.verifyCode);
router.post('/update-password',UpdatePasswordValidator,PasswordResetController.updatePassword);


module.exports = router;