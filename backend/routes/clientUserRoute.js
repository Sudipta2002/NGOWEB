const express = require('express');
const { registerUser, authUser, allNgos } = require('../Controllers/clientUserControll');
const { protect } = require('../middleware/clientAuthMiddleware');
const router = express.Router();


router.route('/').post(registerUser).get(protect, allNgos); // this are the controllers
router.post('/login', authUser);

module.exports = router;