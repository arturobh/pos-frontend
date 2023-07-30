import axios from "axios";
const backendURL = 'https://pos-backend-production-6081.up.railway.app';

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