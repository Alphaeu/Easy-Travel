const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');
const authMiddleware = require('../middleware/authMiddleware');

// Create a new flight
router.post('/', authMiddleware, flightController.createFlight);

// Get all flights
router.get('/', flightController.getAllFlights);

// Get a specific flight by ID
router.get('/:id', flightController.getFlightById);

// Update a flight by ID
router.put('/:id', authMiddleware, flightController.updateFlight);

// Delete a flight by ID
router.delete('/:id', authMiddleware, flightController.deleteFlight);

module.exports = router;
