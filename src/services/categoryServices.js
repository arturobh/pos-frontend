import env from "react-dotenv";
import axios from "axios";
const backendURL = env.BACKEND_URL;

export async function getCategory(id) {

    try{
        const response = await axios.get(backendURL+'/api/categories/'+id);
        return await response.data;
    }catch(error) {
        return [];
    }
}