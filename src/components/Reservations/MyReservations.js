import React, { useState, useEffect } from 'react';
import { fetchMyReservations } from '../../Services/Api.js';

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const loadReservations = async () => {
      try {
        const response = await fetchMyReservations();
        setReservations(response.data);
      } catch (error) {
        console.error('Failed to fetch reservations:', error);
      }
    };

    loadReservations();
  }, []);

  if (reservations.length === 0) return <div>No reservations found.</div>;

  return (
    <div>
      <h1>My Reservations</h1>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <p>Hotel: {reservation.hotelName}</p>
            <p>Room: {reservation.roomName}</p>
            <p>Check-in: {reservation.checkInDate}</p>
            <p>Check-out: {reservation.checkOutDate}</p>
            <p>Status: {reservation.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyReservations;
