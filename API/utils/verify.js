const jwt = require('jsonwebtoken');
const User = require('../models/User');
const createError = require('./error');

function verifyToken(req, res, next){
    if(!req.body.auth.authToken){
        throw createError(498, 'Invalid token');
    }
    jwt.verify(req.body.auth.authToken,
         process.env.JWT_SECRET,
          (err, user) => {
            if(err){
                throw err
            }
            req.userId = user.userId;
    })
}

async function verifyUser (req, res, next){
    try{
        verifyToken(req, res, next);
        const user = await User.findById(req.userId);
        if(user){
            return next();
        }
        throw createError(404, 'User not found');
    }catch(err){
        next(err);
    }
}

module.exports = verifyUser;