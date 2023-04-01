const Quiz = require("../models/Quiz");
const User = require("../models/User");

module.exports.getAllQuestions = async (req, res, next) => {
    try{
        const allQuestions = await Quiz.find();
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json({
            payload: allQuestions
        }) 
    }catch(err){
        next(err)
    }
}

module.exports.addQuestion = async (req, res, next) => {
    try{
        const user = await User.findById(req.userId);
        const question = await new Quiz({...req.body.payload, createdBy: user.userName}).save();
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json({
            payload: question
        })
    }catch(err){
        next(err);
    }
}