import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://66btm70n-3000.inc1.devtunnels.ms/'
})

axiosInstance.interceptors.request.use((req) => {

    req.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
    req.headers['ngrok-skip-browser-warning'] = true;
    // req.headers['Content-Type']
    return req;
});

axiosInstance.interceptors.response.use((res) => {
    return res;
},
    (error) => {
        throw Promise.reject(error)
    }
)