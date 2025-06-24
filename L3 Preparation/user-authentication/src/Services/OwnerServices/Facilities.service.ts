import type { FacilitiesData } from "../../Pages/OwnerPages/Facilities/Facilities.types";
import { axiosInstance } from "../axios.instance"


const getFacilities =async(currentPage: number, pageSize: number)=>{
    try{
        const response= await axiosInstance.get('/owner/facility-manager',
            {params:{
                page:currentPage,
                size:pageSize
            }}
        );
        return response.data
    }catch(e){
        throw{message:e}
    }
}

const postFacilities = async(data:FacilitiesData)=>{
    try{
        const response = await axiosInstance.post('/owner/facility-manager',data)
        return response.data;
    }catch(e){
        throw {message:e}
    }
}

const patchFacilities = async(id:number , data:FacilitiesData)=>{
    try{
        const response = await axiosInstance.patch(`/owner/facility-manager${id}`,data)
        return response.data
    }catch(e){
        throw {message:e}
    }
}

const deleteFacilities = async(id:number)=>{
    try{
        const response = await axiosInstance.delete(`/owner/facility-manager${id}`)
        return response.data;
    }catch(e){
        throw {message:e}
    }
}

export default {
    getFacilities,
    postFacilities,
    patchFacilities,
    deleteFacilities
}