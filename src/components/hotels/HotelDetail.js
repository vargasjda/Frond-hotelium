import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchHotelById } from '../../Services/Api.js';

const HotelDetail = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const loadHotel = async () => {
      try {
        const response = await fetchHotelById(id);
        setHotel(response.data);
      } catch (error) {
        console.error('Failed to fetch hotel details:', error);
      }
    };

    loadHotel();
  }, [id]);

  if (!hotel) return <div>Loading hotel details...</div>;

  return (
    <div>
      <h1>{hotel.name}</h1>
      <p>{hotel.address}</p>
      <p>Rating: {hotel.rating}</p>
      <p>Price per night: {hotel.price}</p>
      <h2>Rooms available:</h2>
      <ul>
        {hotel.rooms.map((room) => (
          <li key={room.codeName}>
            <p>{room.name}</p>
            <p>Price: {room.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelDetail;
