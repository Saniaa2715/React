import axios from 'axios';

export const axiosInstance=axios.create({
    baseURL:''
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

//In this file we first create an axios instance that sets the baseURL which we can use for our further
// operations 