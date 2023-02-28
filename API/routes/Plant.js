const express = require('express');
const { fetchPlants, addPlant } = require('../controllers/Plant');
const verifyUser = require('../utils/verify');
const router = express.Router();

router.get('/fetchPlants', fetchPlants);

router.post('/addPlant', verifyUser, addPlant);

module.exports = router;