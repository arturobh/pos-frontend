import axios from "axios";
const backendURL = 'https://pos-backend-production-6081.up.railway.app';

export async function getCategory(id) {

    try{
        const response = await axios.get(backendURL+'/api/categories/'+id);
        return await response.data;
    }catch(error) {
        return [];
    }
}