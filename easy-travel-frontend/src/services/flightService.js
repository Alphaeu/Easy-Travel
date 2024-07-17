import axios from 'axios';

const API_URL = 'http://localhost:5000/api/flights'; // Update with your backend URL

const fetchFlights = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching flights:', error);
    throw error; // Optionally rethrow or handle the error as needed
  }
};

const searchFlights = async (searchParams) => {
  try {
    const response = await axios.get(API_URL, { params: searchParams });
    return response.data;
  } catch (error) {
    console.error('Error searching flights:', error);
    throw error; // Optionally rethrow or handle the error as needed
  }
};

const getFlightStatus = async (flightId) => {
  try {
    const response = await axios.get(`${API_URL}/status/${flightId}`);
    return response.data;
  } catch (error) {
    console.error('Error getting flight status:', error);
    throw error; // Optionally rethrow or handle the error as needed
  }
};

export default {
  fetchFlights,
  searchFlights,
  getFlightStatus,
};
