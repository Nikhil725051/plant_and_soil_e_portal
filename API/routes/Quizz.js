const express = require('express');
const { getAllQuestions, addQuestion } = require('../controllers/Quizz');
const router = express.Router();
const verifyUser = require('../utils/verify')

router.get('/getQuestions', getAllQuestions);

router.post('/addQuestion', verifyUser, addQuestion)

module.exports = router;