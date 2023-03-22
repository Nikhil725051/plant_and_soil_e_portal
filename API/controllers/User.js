const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createError = require('../utils/error')

module.exports.registerUser = async (req, res, next) => {
    try {
        var user = await User.findOne({userName: req.body.userName});
        if(user){
            throw(createError(409, 'Username already taken.'))
        }
        user = await User.findOne({email: req.body.email});
        if(user){
            throw(createError(409, 'A user with this email id already exists.'));
        }
    
        const hashedPassword = await bcrypt.hash(req.body.password, 5);
        var newUser = new User({ ...req.body, password: hashedPassword });
        newUser = await newUser.save();
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json({
            auth: {
                token,
            },
            payload: {
                user: {
                    userId: newUser._id,
                    userName: newUser.userName,
                    fullName: newUser.fullName,
                    email: newUser.email
                }
            }
        })
    } catch (err) {
        next(err);
    }
}

module.exports.loginUser = async (req, res, next) => {
    try{
        const user = await User.findOne({email: req.body.email});
        if(!user){
            throw createError(404, 'User not found');
        }
        bcrypt.compare(req.body.password, user.password)
        .then((isValid, err) => {
            if(err){
                throw err;
            }
            if(isValid){
                const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
                res.setHeader('Content-Type', 'application/json');
                res.status(200);
                return res.json({
                    auth: {
                        token
                    },
                    payload: {
                        user: {
                            id: user._id,
                            userName: user.userName,
                            fullName: user.fullName,
                            email: user.email
                        }
                    }
                })
            }
            return next(createError(403, 'Wrong Password'));

        })
    }catch(err){
        next(err);
    }
}