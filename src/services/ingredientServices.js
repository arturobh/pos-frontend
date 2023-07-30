import axios from "axios";
import backendURL from './backendServer';

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