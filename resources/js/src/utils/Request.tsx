// src/axiosService.js
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
const errorToster = (message) => {
    MySwal.fire({
        title: message,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        showCloseButton: false,
        customClass: {
            popup: `color-danger`,
        },
    });
};

// Create an Axios instance
const axiosInstance = axios.create({
    baseURL: "https://admin.dj-jay.in", // Change this to your API's base URL
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
export const login = async (username, password, otp) => {
    try {
        const response = await axiosInstance.post('/api/login', { username, password, otp });
        const accessToken = response.data.accessToken;
        const refreshToken = response.data.refreshToken;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        return true;
    } catch (error) {
        handleError(error);
        return false;
    }
};

// Function to check if user is logged in
export const isLoggedIn = () => {
    return !!localStorage.getItem('accessToken');
};

// Error handling function
const handleError = (error) => {
    if (error.response) {
        errorToster(error.response.data.message);
    } else if (error.request) {
        console.error('Error Request:', error.request);
    } else {
        console.error('Error Message:', error.message);
    }
    console.error('Error Config:', error.config);
};
