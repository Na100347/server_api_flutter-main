// routes/tourRoutes.js
const express = require('express');
const router = express.Router();
const { getbests } = require('../controllers/bestcontroller');

// Define the API endpoint for fetching tours
router.get('/bests', getbests);

module.exports = router;
