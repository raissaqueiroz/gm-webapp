import axios from 'axios';

const api = axios.create({ baseURL: "https://dev.fluenciacorporal.com"});

export default api;
