import { get } from "../Utils/request";

export const getCategoriesList = async () => {
    
    const result = await get("/category");

    return result;
}