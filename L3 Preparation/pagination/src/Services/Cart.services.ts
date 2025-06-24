
import axios from 'axios';

const getAllCarts=async(currentPage: number, pageSize: number)=>{
    try{
        const skip = currentPage * pageSize;
        const response = await axios.get('https://dummyjson.com/carts',{
            params:{
                limit:pageSize,
                skip:skip
            }
        });
        return response.data;
    }catch(e){
        throw{message:e}
    }
}

export default {
    getAllCarts
}