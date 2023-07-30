import axios from "axios";
import backendURL from './backendServer';

export async function getAllCategories() {

    try{
        const response = await axios.get(backendURL+'/api/categories');
        return await response.data;
    }catch(error) {
        console.log(error);
        return [];
    }
    
}