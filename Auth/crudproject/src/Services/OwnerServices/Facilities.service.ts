


//Get operation => get all the facilities present 
//in the api provided

import type { FacilitiesData } from "../../Pages/OwnerPages/Facilities/Facilities.types";
import { axiosInstance } from "../axios.instance"

const getFacilities=async()=>{
    try{
        const response=await axiosInstance.get('/owner/facility?page=0&size=7');
        return response.data;
    }catch(e){
        throw {message:e}
    }
}

const addFacilities=async(data:FacilitiesData)=>{
    try{
        const response=await axiosInstance.post('/owner/facility', data)
        return response.data;
    }catch(e){
        throw {message:e}
    }
}

const editFacilities = async(id:number,data:FacilitiesData)=>{
    try{
        const response=await axiosInstance.patch(`/owner/facility/${id}`,data)
        return response.data;
    }catch(e){
        throw {message:e}
    }
}

const deleteFacilities=async(id:number)=>{
    try{
        const response = await axiosInstance.delete(`/owner/facility/${id}`);
        return response.data;
    }catch(e){
        throw{message:e}
    }
}


export default {
    getFacilities,
    addFacilities,
    editFacilities,
    deleteFacilities
}


