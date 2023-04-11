import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:84',
});

export default api;
