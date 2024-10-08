const User = require('../models/user')
const {hashPassword, comparePassword} = require('../helpers/auth')
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('test is working')
}

// Register Endpoint
const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        // Check if name was entered
        if(!name){
            return res.json({
                error: 'name is required'
            })
        };
        //Check if password is good
        if(!password || password.length < 6){
            return res.json({
                error: 'password is required and should be at least 6 characters long'
            })
        };
        // Check email
        const exist = await User.findOne({email});
        if (exist) {
            return res.json ({
                error: 'email is taken already'
            })
        }

        const hashedPassword = await hashPassword(password)
        //Create user in database
        const user = await User.create ({
            name,
            email,
            password: hashedPassword,
        });

        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

// Login Endpoint
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

      //Check if user exists
      const user = await User.findOne({email});
      if (!user) {
        return res.json({
            error: 'No user found'
        })
      }

      //Check if passwords match
      const match = await comparePassword(password, user.password )
      if(match) {
        jwt.sign({email: user.email, id: user._id, name:user.name}, process.env.JWT_SECRET, {}, (err, token) => {
            if(err) throw err;
            res.cookie('token', token).json(user)
        })
      }
      if(!match) {
        res.json({
            error: "password do not match"
        })
      }
    } catch (error) {
        console.log(error)
    }
}

const getProfile = async (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, decoded) => {
        if (err) {
            console.error(err);
            return res.status(401).json({ error: 'Invalid token' });
        }
        try {
            const user = await User.findById(decoded.id).select('-password');
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(user);
        } catch (dbError) {
            console.error(dbError);
            res.status(500).json({ error: 'Database error' });
        }
    });
};

// Logout Endpoint
const logoutUser = (req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'Logged out successfully' });
}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
    logoutUser
}