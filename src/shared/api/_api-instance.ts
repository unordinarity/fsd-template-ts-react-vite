import axios from 'axios';

export const ApiInstance = axios.create({
  baseURL: import.meta.env.API_URL,
});
