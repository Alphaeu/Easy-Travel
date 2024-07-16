const express = require('express');
const router = express.Router();
const { getFlightStatus } = require('../controllers/statusController');

// Get flight status
router.post('/', getFlightStatus);

module.exports = router;
