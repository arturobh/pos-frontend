import axios from "axios";
const backendURL = 'https://pos-backend-production-6081.up.railway.app';

export async function getAllCategories() {

    try{
        const response = await axios.get(backendURL+'/api/categories');
        return await response.data;
    }catch(error) {
        console.log(error);
        return [];
    }
    
}