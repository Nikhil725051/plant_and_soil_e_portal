const createError = require('../utils/error');
const Plant = require('../models/Plant');
const User = require('../models/User');
const {ref, getDownloadURL, uploadString} = require('firebase/storage');
const storage = require('../firebase');



module.exports.fetchPlants = async (req, res, next) => {
    try{
        const allPlants = await Plant.find();
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json({
            payload: allPlants
        }) 
    }catch(err){
        next(err);
    }
}

module.exports.addPlant = async (req, res, next) => {
    try{
        const imageRef = ref(storage, `/plants/${req.body.payload.image.name}`);
        const uploadTask = uploadString(imageRef, req.body.payload.image.img, 'base64');
        const imgUrl = await uploadTask.then((snapshot) => getDownloadURL(snapshot.ref));
        const user = await User.findById(req.userId)
        const newPlant = await new Plant({...req.body.payload, addedBy: user.userName, imgUrl: imgUrl}).save();
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json({
            payload: newPlant
        })
    }catch(err){
        next(err)
    }
}