import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001',
  // other config options if needed
});

export default instance;
