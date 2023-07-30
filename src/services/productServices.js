import axios from "axios";
import backendURL from './backendServer';

export async function getProducts(categoryName) {

    try{
        const response = await axios.get(backendURL+'/api/products/byCategory/'+categoryName);
        return await response.data;
    }catch(error) {
        return [];
    }
}

export async function getOneProduct(id) {

    try{
        const response = await axios.get(backendURL+'/api/products/'+id);
        return await response.data;
    }catch(error) {
        return [];
    }
}