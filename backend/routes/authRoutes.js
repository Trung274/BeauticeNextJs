const express =  require('express');
const router = express.Router();
const cors = require('cors')
const {test, logoutUser, registerUser, loginUser, getProfile} = require('../controllers/authController')

//middleware
router.use(
    cors({
        credentials: true,
        origin: process.env.CLIENT_URL
    })
)

router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)
router.post('/logout', logoutUser);

module.exports = router 