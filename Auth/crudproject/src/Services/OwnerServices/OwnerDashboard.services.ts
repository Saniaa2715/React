import { axiosInstance } from "../axios.instance"


const getDemandedTools=async()=>{
    try{
        const response = await axiosInstance.get('/owner/top-demanded-tools');
        return response.data;
    }catch(e){
        throw {message:e}
    }
}


const getBrokenTools=async()=>{
    try{
        const response= await axiosInstance.get('/owner/most-broken-tools');
        return response.data;
    }catch(e){
        throw {message:e}
    }
}


const getPricedTools=async()=>{
    try{
        const response = await axiosInstance.get('/owner/top-priced-tools');
        return response.data;
    }catch(e){
        throw {message:e}
    }
}

export default {
    getDemandedTools,
    getBrokenTools,
    getPricedTools
}