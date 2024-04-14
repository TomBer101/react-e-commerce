// api.js
import axios from 'axios';

const API_BASE_URL = 'https://example.com/api';

export async function fetchData(endpoint) {
  const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
  return response.data;
}

export async function postData(endpoint, data) {
  const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data);
  return response.data;
}

// Other API functions as needed
