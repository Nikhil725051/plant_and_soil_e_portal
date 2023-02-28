const express = require('express');
const { getAllVideos, addVideo } = require('../controllers/Video');
const verifyUser = require('../utils/verify');
const router = express.Router();

router.get('/getVideos', getAllVideos);

router.post('/addVideo', verifyUser, addVideo);

module.exports = router;