import { axiosInstance } from "./axios.instance"

//Function to fetch Tools
export const getTools =async()=>{
    try{
        const res= await axiosInstance.get('/');

        return res;
    }catch(e){
        console.log(e);
    }
}

//Function to get Tools
export const addTools=async()=>{
    try{
        const res= await axiosInstance.post('/')
    }
}


//Function to edit Tools
export const editTools=async()=>{
    try{
        const res=await axiosInstance.patch('/');

        return res;
    }catch(e){
        console.log(e);
    }
}

//Function to delete Tools
export const deleteTools=async()=>{
    
        axiosInstance.delete('/'); 
}

