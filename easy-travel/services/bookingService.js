import axios from 'axios';

const API_URL = 'http://localhost:5000/api/bookings'; // Update with your backend URL

const bookFlight = async (bookingDetails) => {
  const response = await axios.post(API_URL, bookingDetails);
  return response.data;
};

export default {
  bookFlight,
};
