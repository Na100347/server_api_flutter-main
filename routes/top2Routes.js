// routes/tourRoutes.js
const express = require('express');
const router = express.Router();
const { getTop2s } = require('../controllers/top2controller');

// Define the API endpoint for fetching tours
router.get('/top2s', getTop2s);

module.exports = router;
