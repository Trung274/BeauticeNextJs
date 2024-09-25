const express =  require('express');
const router = express.Router();
const cors = require('cors')
const {test, logoutUser, registerUser, loginUser, getProfile} = require('../controllers/authController')

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)

router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)
router.post('/logout', logoutUser);

module.exports = router 