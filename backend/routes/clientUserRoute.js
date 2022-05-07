const express = require('express');
const { registerUser, authUser } = require('../Controllers/clientUserControll');
const router = express.Router();


router.route('/').post(registerUser); // this are the controllers
router.post('/login', authUser);

module.exports = router;