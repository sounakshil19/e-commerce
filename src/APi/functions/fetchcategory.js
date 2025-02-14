

import { axiosinstance } from "../axiosinstance/axiosinstance";
import { endpoint } from "../endpoint/endpoint";


export const fetchcategory = async(name)=>{
    try {

        const url = name ? endpoint.category(name) : endpoints.product;
        
        const {data} = await axiosinstance.get(url);
        return data;
        
    } catch (error) {
        console.log(error);
    }
}