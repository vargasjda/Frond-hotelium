import React, { useState, useEffect } from 'react';
import { fetchHotels } from '../../Services/Api.js';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const loadHotels = async () => {
      try {
        const response = await fetchHotels();
        setHotels(response.data);
      } catch (error) {
        console.error('Failed to load hotels:', error);
      }
    };

    loadHotels();
  }, []);

  return (
    <div>
      <h1>Available Hotels</h1>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <h2>{hotel.name}</h2>
            <p>{hotel.address}</p>
            <p>Price per night: {hotel.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
