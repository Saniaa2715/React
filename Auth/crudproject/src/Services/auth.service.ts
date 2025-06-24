//In this file , the authorization part will be there
//There are basically two authorizations (Login and register)

import { axiosInstance } from "./axios.instance";
import type { Auth, User, Response } from "./service.types";

//First authentication will be Login 

const Login = async (credentials:User) => {

    try {
        const response = await axiosInstance.post<Response<Auth>>('/auth/login', credentials);
        if(response.status !==200) throw {message:'Invalis Credentials'}

        return response;
       
    } catch (e) {
        // throw e;
        console.log(e);
    }

}
const isUserLoggedIn = () => !!localStorage.getItem('token');

// const getLoggedInRole = () => localStorage.getItem('role') || '';

// const getLoggedInRole=()=> loggedInUser?.role;

export default 
{
    Login,
    isUserLoggedIn,
    // getLoggedInRole
}