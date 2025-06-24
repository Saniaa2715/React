

import type { ProductsData } from '../Pages/Products/Products.types';
import { axiosInstance } from './axios.instance';


const getProducts =async()=>{
    try{
        const response = await axiosInstance.get(`products`);
        return response.data;
    }catch(e){
        throw {message:e}
    }
}

const postProducts = async(data:ProductsData)=>{
    try{
        const response = await axiosInstance.post('/products/add', data);
        return response.data;
    }catch(e){
        throw {message:e}
    }
}

const patchProducts=async(id:number, data:ProductsData)=>{
    try{
        const response = await axiosInstance.patch(`/products/${id}`, data)
        return response.data
    }catch(e){
        throw {message:e}
    }
}

const deleteProducts = async(id:number)=>{
    try{
        await axiosInstance.delete(`/products/${id}`)
    }catch(e){
        throw {message:e}
    }
}

export default {
    getProducts,
    postProducts,
    patchProducts,
    deleteProducts
}
