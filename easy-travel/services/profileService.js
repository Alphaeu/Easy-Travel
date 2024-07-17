import axios from 'axios';
import authHeader from './authHeader';

const API_URL = 'http://localhost:5000/api/profile'; // Update with your backend URL

const getProfile = async () => {
    const response = await axios.get(API_URL, { headers: authHeader() });
    return response.data;
  };
  
  const updateProfile = async (profileData) => {
    const response = await axios.put(API_URL, profileData, { headers: authHeader() });
    return response.data;
  };
  
export default {
  getProfile,
  updateProfile,
};
