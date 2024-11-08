import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Add response interceptor for debugging
api.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error:', {
            status: error.response?.status,
            data: error.response?.data,
            headers: error.response?.headers
        });
        return Promise.reject(error);
    }
);

export const registerUser = async (userData: { name: string; email: string; password: string }) => {
  const response = await api.post('/register', userData);
  return response.data;
};

export const loginUser = async (credentials: { email: string; password: string }) => {
  const response = await api.post('/login', credentials);
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get('/profile');
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post('/logout');
  return response.data;
};