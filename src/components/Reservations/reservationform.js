import React, { useState } from 'react';
import { createReservation } from '../../Services/Api.js';

const ReservationForm = () => {
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestAddress, setGuestAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reservationData = {
        guestName,
        guestPhone,
        guestAddress,
       
      };
      const response = await createReservation(reservationData);
      console.log('Reservation successful:', response.data);
    } catch (error) {
      console.error('Reservation failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={guestName}
        onChange={(e) => setGuestName(e.target.value)}
        placeholder="Guest Name"
        required
      />
      <input
        type="tel"
        value={guestPhone}
        onChange={(e) => setGuestPhone(e.target.value)}
        placeholder="Phone Number"
        required
      />
      <input
        type="text"
        value={guestAddress}
        onChange={(e) => setGuestAddress(e.target.value)}
        placeholder="Address"
        required
      />
      <button type="submit">Reserve</button>
    </form>
  );
};

export default ReservationForm;
