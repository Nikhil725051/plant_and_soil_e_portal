const User = require("../models/User");
const Video = require("../models/Video");

module.exports.getAllVideos = async (req, res, next) => {
    try{
        const allVideos = await Video.find();
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json({
            payload: allVideos
        })
    }catch(err){
        next(err);
    }
}

module.exports.addVideo = async (req, res, next) => {
    try{
        const user = await User.findById(req.userId);
        const video = await new Video({...req.body.payload, addedBy: user.userName}).save();
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json({
            payload: video
        })
    }catch(err){
        next(err)
    }
}