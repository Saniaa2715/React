import { axiosInstance } from "./axios.instance"


const getDistributors = async()=>{
    try{
        const url = "?limit=10&page=1";
        const response=await axiosInstance.get(`distributor/${url}`);
        // console.log(response.data)
        return response.data;
    }catch(e:any){
        throw {message:e.response}
    }
}

export default {
    getDistributors
}