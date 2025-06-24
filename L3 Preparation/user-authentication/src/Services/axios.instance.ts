import axios from 'axios';

export const axiosInstance= axios.create({
    baseURL:'https://5f1d-103-241-80-138.ngrok-free.app'
})

// intercept the request and do common things
axiosInstance.interceptors.request.use((req) => {
    // showLoader();
    req.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    req.headers['ngrok-skip-browser-warning'] = true;
    return req;
});

axiosInstance.interceptors.response.use((res) => {
    // hideLoader();
    return res;
},
    (error) => {
        // hideLoader();
        throw Promise.reject(error);
    }
)