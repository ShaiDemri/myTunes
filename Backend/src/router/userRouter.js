const express = require('express');
const userController = require('../controller/userController');
const userMiddleware = require('../middelwares/userMiddleware');

const router = express.Router();

router.post('/signup', userMiddleware.signupToDb,userController.signup);
router.post('/login', userMiddleware.loginToDb,userController.signup);
router.post('/logout', userController.logout);

module.exports = router;
