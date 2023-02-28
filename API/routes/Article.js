const express = require('express');
const { getArticles, addArticle } = require('../controllers/Article');
const router = express.Router();
const verifyUser = require('../utils/verify')

router.get('/fetchArticles', getArticles);

router.post('/addArticle', verifyUser, addArticle);

module.exports = router;