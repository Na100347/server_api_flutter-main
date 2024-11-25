// routes/tourRoutes.js
const express = require('express');
const router = express.Router();
const { getTours } = require('../controllers/tourcontroller');

// Define the API endpoint for fetching tours
router.get('/tours', getTours);

module.exports = router;
