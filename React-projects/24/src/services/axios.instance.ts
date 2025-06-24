import axios from 'axios';

//Any project start with services
//Firstly we create an axiosInstance which we can access throughout the project

export const axiosInstance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})