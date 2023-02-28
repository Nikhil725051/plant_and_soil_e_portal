const createError = require('../utils/error');
const Article = require('../models/Article');
const User = require('../models/User');
const { ref, uploadString, getDownloadURL } = require('firebase/storage');
const storage = require('../firebase');



module.exports.getArticles = async (req, res, next) => {
    try{
        const allArticles = await Article.find();
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json({
            payload: allArticles
        });
    }catch(err){
        next(err);
    }
}

module.exports.addArticle = async (req, res, next) => {
    try{
        const imageRef = ref(storage, `/plants/${req.body.payload.image.name}`);
        const uploadTask = uploadString(imageRef, req.body.payload.image.img, 'base64');
        const imgUrl = await uploadTask.then((snapshot) => getDownloadURL(snapshot.ref));
        const user = await User.findById(req.userId);
        const article = await new Article({...req.body.payload, postedBy: user.userName, imgUrl: imgUrl}).save();
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.json({
            payload: article
        })
    }catch(err){
        next(err)
    }
}