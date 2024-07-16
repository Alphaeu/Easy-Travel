const Booking = require('../models/Booking');
const Flight = require('../models/Flight');

exports.createBooking = async (req, res) => {
  const { flightId, passengers } = req.body;
  try {
    const flight = await Flight.findById(flightId);
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }

    const totalPrice = flight.price * passengers;

    const booking = await Booking.create({
      user: req.user._id,
      flight: flightId,
      passengers,
      totalPrice,
    });

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).populate('flight');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
