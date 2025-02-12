import { useQuery } from "@tanstack/react-query"
import { fetchProducts } from "../../APi/functions/fetchProducts"

export const useFetchProductQuery = ()=>{
    return useQuery({
        queryKey:['product'],
        queryFn :  fetchProducts,
    })
}