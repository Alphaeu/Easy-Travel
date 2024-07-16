const express = require('express');
const router = express.Router();
const { createBooking, getUserBookings } = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');

// Create a new booking
router.post('/', authMiddleware, createBooking);

// Get user bookings
router.get('/', authMiddleware, getUserBookings);

module.exports = router;
