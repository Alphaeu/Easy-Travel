import React from 'react';
import FlightSearch from '../components/FlightSearch';

const HomePage = () => {
  const handleSearch = (data) => {
    // Implement flight search logic here
    console.log('Searching flights with data:', data);
  };

  return (
    <div>
      <h2>Welcome to Ascent Travel</h2>
      <FlightSearch onSearch={handleSearch} />
    </div>
  );
};

export default HomePage;
