const Flight = require('../models/Flight');
const Booking = require('../models/Booking');

// Search flights
exports.searchFlights = async (req, res) => {
  const { from, to, departureDate, returnDate, passengers, classType } = req.body;
  try {
    const flights = await Flight.find({ 
      from, 
      to, 
      departureTime: { $gte: new Date(departureDate) } 
    });
    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { flight, passengers, class: bookingClass } = req.body;
    const userId = req.user.id;

    const newBooking = new Booking({
      user: userId,
      flight,
      passengers,
      class: bookingClass,
    });

    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all bookings for the authenticated user
exports.getUserBookings = async (req, res) => {
  try {
    const userId = req.user.id;
    const bookings = await Booking.find({ user: userId }).populate('flight');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a specific booking by ID
exports.getBookingById = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const booking = await Booking.findById(bookingId).populate('flight');
    
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update a booking by ID
exports.updateBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const updates = req.body;
    
    const updatedBooking = await Booking.findByIdAndUpdate(bookingId, updates, { new: true });
    
    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a booking by ID
exports.deleteBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    
    const deletedBooking = await Booking.findByIdAndDelete(bookingId);
    
    if (!deletedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
