
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000', 
});


export const fetchMyReservations = async () => {
  const response = await api.get('/reservations');
  return response.data;
};


export const fetchHotelById = async (id) => {
  const response = await api.get(`/hotels/${id}`);
  return response.data;
};


export const createReservation = async (reservationData) => {
  const response = await api.post('/reservations', reservationData);
  return response.data;
};

export const fetchHotels = async () => {
  const response = await api.get('/hotels');
  return response.data;
};

export const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const signup = async (userData) => {
  const response = await api.post('/auth/signup', userData);
  return response.data;
};


export default api;
