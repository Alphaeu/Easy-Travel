const express = require('express');
const router = express.Router();
const { searchFlights } = require('../controllers/flightController');

// Search flights
router.post('/search', searchFlights);

module.exports = router;
