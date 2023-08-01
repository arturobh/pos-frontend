import env from "react-dotenv";
import axios from "axios";
const backendURL = env.BACKEND_URL;

export async function getAllCategories() {

    try{
        const response = await axios.get(backendURL+'/api/categories');
        return await response.data;
    }catch(error) {
        console.log(error);
        return [];
    }
    
}