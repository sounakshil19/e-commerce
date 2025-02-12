import { axiosinstance } from "../axiosinstance/axiosinstance";
import { endpoint } from "../endpoint/endpoint";


export const fetchProducts = async()=>{
    try {
        const{data}= await axiosinstance.get(endpoint.product)
        return data;
    } catch (error) {
        console.log(error);
        
    }
}