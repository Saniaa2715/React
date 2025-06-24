
import {  type FacilityManagers } from "../../Pages/OwnerPages/FacilityManagers/FacilityManagers.types";
import { axiosInstance } from "../axios.instance"

const getFacilityManagers = async () => {
    try {
        const response = await axiosInstance.get<FacilityManagers[]>('/owner/facility-manager?page=0&size=5')
        return response.data.content;
    } catch (e) {
        throw { message: e };
    }
}

const addFacilityManagers=async(data: FacilityManagers)=>{
    try{
        const response = await axiosInstance.post('owner/facility-manager',data );
        return response.data;
    }catch(e){
        throw {message:e}
    }
}

const editFacilityManagers=async(id:number, updatedData:FacilityManagers)=>{
    try{
        const response= await axiosInstance.patch(`owner/facility-manager/${id}`, updatedData);
        return response.data;
    }catch(e){
        throw {message:e}
    }
}

const deleteFacilityManagers=async(id:number)=>{
    try{
        const response= await axiosInstance.delete(`owner/facility-manager/${id}`);
        return response.data;
    }catch(e){
        throw {message:e}
    }
}

export default {
    getFacilityManagers,
    addFacilityManagers,
    editFacilityManagers,
    deleteFacilityManagers
}