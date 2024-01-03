import { create, deleteSomething, edit, get } from "../Utils/request";

//file chứa API
export const CreateProduct = async (data) => {
    const result = await create("/products",data);
    return result;
}


//////////////////


export const editProduct = async (id, data) => {
    
    
    const result=await edit(`/products/${id}`,data);
    return result; 
}


//////////////////////


export const DeleteProduct=async (id)=>{
    const result=await deleteSomething("/products/" +id);
    return result;
}


/////////

export const getProductList  = async ()=>{  
    const result = await get("/products");

    return result;
}