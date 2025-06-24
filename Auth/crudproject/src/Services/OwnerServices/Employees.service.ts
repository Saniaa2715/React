import { axiosInstance } from "../axios.instance"


const getAllEmployees=async()=>{
    try{
        const response = await axiosInstance.get('/owner/employees?page=0&size=5');
        // console.log(response.data)
        return response.data;
    }catch(e){
        throw {message:e}
    }
}

export default {
    getAllEmployees
}