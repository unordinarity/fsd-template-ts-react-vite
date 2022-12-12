import axios from 'axios';

export const ApiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
