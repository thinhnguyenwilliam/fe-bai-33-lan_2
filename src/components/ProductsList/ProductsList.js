import { useEffect, useState } from "react";
import "./ProductsList.css"
import ProductItem from "../ProductItem";
import ProductCreate from "../ProductCreate";
import { getProductList } from "../services/ProductServices";


const ProductsList = () => {
    const [productlist, setproductlist] = useState();


    const fetchAPI = async () => {
        const result=await getProductList();

        setproductlist(result.reverse());//đảo mảng khi them sàn phẩm
    }

    const handleReload=()=>{
        fetchAPI();
    }


    useEffect(() => {
        fetchAPI()
    }, []);//api call only 1 time, give arry empty(dependency empty)


    //console.log(productlist);

    return (
        <>
            
            <ProductCreate ham1={handleReload}/>



            {/* map trong array trong reacjs cần key (key={item.id}) */}
            <h2>Danh sách sản phẩm</h2>
            {productlist && (
                <div className="product__list"> 
                    {productlist.map(item => ( 
                        <ProductItem  dataTransfer={item}  key={item.id} ham2={handleReload} /> 
                    ))}
                </div>
            )}

        </>
    )
}
export default ProductsList;