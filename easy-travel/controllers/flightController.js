const Flight = require('../models/Flight');

exports.searchFlights = async (req, res) => {
  const { from, to, departureDate, returnDate, passengers, classType } = req.body;
  try {
    const flights = await Flight.find({ from, to, departureTime: { $gte: new Date(departureDate) } });

    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
