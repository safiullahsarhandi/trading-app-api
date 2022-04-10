const express = require('express');
const router = express.Router();
const authMiddleware = require('../../Middlewares/Auth');
const ReviewController = require('../../Controllers/Api/Review/ReviewController');
const CreateReviewValidator = require('../../Validators/Review/CreateReviewValidator');

router.post('/',[authMiddleware,CreateReviewValidator],ReviewController.store);
router.get('/:id',authMiddleware,ReviewController.show);

module.exports = router;