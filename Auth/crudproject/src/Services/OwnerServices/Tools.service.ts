import { axiosInstance } from "../axios.instance"



const fetchTools = async () => {
    try {
        const response = await axiosInstance.get('/owner/tool?page=0&size=10&name=ham');
        return response.data;
    } catch (e) {
        throw { message: e }
    }
}

export default {
    fetchTools
}