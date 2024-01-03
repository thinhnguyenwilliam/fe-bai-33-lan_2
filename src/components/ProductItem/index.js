import ProductEdit from "../ProductEdit";
import ProductDelete from "./ProductDelete";

const ProductItem = (props) => {
    const { dataTransfer, ham2 } = props;

    return (
        <>
            <div className="product__item">  
                <img src={dataTransfer.thumbnail} alt={dataTransfer.title} />
                <h4>{dataTransfer.title}</h4>
                <p>Giảm {dataTransfer.discountPercentage}%</p>
                <p>Giá {dataTransfer.price}$</p>
                <ProductEdit giatriObject={dataTransfer} hamReload={ham2} /> 
                <ProductDelete giatriObject={dataTransfer} hamReload={ham2} />
            </div>
        </>
    )
}
export default ProductItem;