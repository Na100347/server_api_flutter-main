// routes/tourRoutes.js
const express = require('express');
const router = express.Router();
const { getTops } = require('../controllers/topcontroller');

// Define the API endpoint for fetching tours
router.get('/tops', getTops);

module.exports = router;
