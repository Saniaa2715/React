
import type {  User } from '../Services/service.types';
import { axiosInstance } from "./axios.instance"


const LoginUser=async(data:User)=>{
    
    try{
        const response = await axiosInstance.post('/auth/login',data)
        if(response.status !==200) throw {message:'Invalis Credentials'}

        // localStorage.setItem('token', response.data.token)
        return response.data;
    }catch(e){
        throw {message:e}
    }
}

export default {
    LoginUser
}

