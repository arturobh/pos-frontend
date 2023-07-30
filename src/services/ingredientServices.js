import axios from "axios";
const backendURL = 'https://pos-backend-production-6081.up.railway.app';

export async function getExtraIngredients() {

    try{
        const response = await axios.get(backendURL+'/api/ingredients/');
        return await response.data;
    }catch(error) {
        return [];
    }
}

export async function getOneIngredient(id) {

    try{
        const response = await axios.get(backendURL+'/api/ingredients/'+id);
        return await response.data;
    }catch(error) {
        return [];
    }
}