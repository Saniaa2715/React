
//Since we are fetching users we will write the services like  get, post, put,patch ,delete

import axios from 'axios';

export const getUsers=async()=>{

    try{
        const response = await axios.get('/users');
        return response;
    }
    catch(e){
        // throw e;
        console.log(e);
    }

}