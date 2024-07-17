import React, { useState } from 'react';

const FlightSearch = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    class: 'Economy',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flight-search-form">
      <label>
        From
        <input
          type="text"
          name="from"
          placeholder="From"
          value={formData.from}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        To
        <input
          type="text"
          name="to"
          placeholder="To"
          value={formData.to}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Departure Date
        <input
          type="date"
          name="departureDate"
          value={formData.departureDate}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Return Date
        <input
          type="date"
          name="returnDate"
          value={formData.returnDate}
          onChange={handleChange}
        />
      </label>
      <label>
        Passengers
        <input
          type="number"
          name="passengers"
          value={formData.passengers}
          onChange={handleChange}
          min="1"
          required
        />
      </label>
      <label>
        Class
        <select name="class" value={formData.class} onChange={handleChange}>
          <option value="Economy">Economy</option>
          <option value="Business">Business</option>
          <option value="First">First</option>
        </select>
      </label>
      <button type="submit">Search Flights</button>
    </form>
  );
};

export default FlightSearch;
