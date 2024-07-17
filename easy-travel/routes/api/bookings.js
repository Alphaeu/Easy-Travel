const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');

// Create a new booking
router.post('/', authMiddleware, bookingController.createBooking);

// Get all bookings for the authenticated user
router.get('/', authMiddleware, bookingController.getUserBookings);

// Get a specific booking by ID
router.get('/:id', authMiddleware, bookingController.getBookingById);

// Update a booking by ID
router.put('/:id', authMiddleware, bookingController.updateBooking);

// Delete a booking by ID
router.delete('/:id', authMiddleware, bookingController.deleteBooking);

module.exports = router;
