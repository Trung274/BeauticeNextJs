const express =  require('express');
const router = express.Router();
const {test, logoutUser, registerUser, loginUser, getProfile} = require('../controllers/authController')

router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)
router.post('/logout', logoutUser);

module.exports = router