// src/axiosService.js
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000", // Change this to your API's base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to handle GET requests
export const getRequest = async (url, params = {}, headers = {}) => {
    try {
        const response = await axiosInstance.get(url, { params, headers });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Function to handle POST requests
export const postRequest = async (url, data, params = {}, headers = {}) => {
    try {
        const response = await axiosInstance.post(url, data, { params, headers });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Function to handle PUT requests
export const putRequest = async (url, data, params = {}, headers = {}) => {
    try {
        const response = await axiosInstance.put(url, data, { params, headers });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Function to handle DELETE requests
export const deleteRequest = async (url, params = {}, headers = {}) => {
    try {
        const response = await axiosInstance.delete(url, { params, headers });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Function to handle login
export const login = async (username, password) => {
    try {
        const response = await axiosInstance.post('/login', { username, password });
        const token = response.data.token;
        localStorage.setItem('token', token);
        return token;
    } catch (error) {
        handleError(error);
    }
};

// Function to check if user is logged in
export const isLoggedIn = () => {
    return !!localStorage.getItem('token');
};

// Error handling function
const handleError = (error) => {
    if (error.response) {
        console.error('Error Response:', error.response.data);
        console.error('Error Status:', error.response.status);
        console.error('Error Headers:', error.response.headers);
    } else if (error.request) {
        console.error('Error Request:', error.request);
    } else {
        console.error('Error Message:', error.message);
    }
    console.error('Error Config:', error.config);
};
