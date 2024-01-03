import { useEffect, useState } from "react";
import Modal from 'react-modal';
import "../ProductsList/ProductsList.css";
import Swal from 'sweetalert2';
import { CreateProduct } from "../services/ProductServices";
import { getCategoriesList } from "../services/CategoriesService";


const ProductCreate = (props) => {
    const { ham1 } = props;

    const [showModal, setshowModal] = useState(false);
    const [categories, setcategories] = useState();


    useEffect(() => {
        const fetchAPI = async () => {
            const result=await getCategoriesList();

            setcategories(result);
        }
        fetchAPI();
    }, []);//api call only 1 time, give arry empty(dependency empty)


    const openModal = () => {
        setshowModal(true);
    }

    const closeModal = () => {
        setshowModal(false);
    }

    
        
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        //console.log(event);
        const objectProduct = {
            title: event.target.elements.title.value,
            description: event.target.elements.description.value,
            price: parseInt(event.target.elements.price.value),
            discountPercentage: parseInt(event.target.elements.discountPercentage.value),
            stock: parseInt(event.target.elements.stock.value),
            category: event.target.elements.category.value,
            thumbnail: event.target.elements.thumbnail.value
        }
        //


        //cách gửi json từ FE sang BE
        const result= await CreateProduct(objectProduct);
        if (result) {
            closeModal();
            ham1();//reload lại giao diện

            Swal.fire({
                icon: "success",
                title: "Đã thêm thành công",
                timer: 3000
            });
        }
    }



    return (
        <>
            <button onClick={openModal}>Thêm mới sản phẩm</button>


            <Modal isOpen={showModal} >
                <button onClick={closeModal}>Đóng</button>

                <h3>Add new product</h3>

                <form className="product__form" onSubmit={handleSubmit}>
                    <table>
                        <tbody>

                            <tr>
                                <td>
                                    Tiêu đề
                                </td>
                                <td>
                                    <input name="title" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Danh mục
                                </td>
                                <td>
                                    {categories && (
                                        <select name="category">
                                            {categories.map((item, index) => (
                                                <option value={item} key={index}>{item}</option>
                                            ))}
                                        </select>
                                    )}
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Giá
                                </td>
                                <td>
                                    <input name="price" type="number" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    % giảm giá
                                </td>
                                <td>
                                    <input name="discountPercentage" type="number" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    số lượng còn lại trong kho
                                </td>
                                <td>
                                    <input name="stock" type="number" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Hình ảnh
                                </td>
                                <td>
                                    <input name="thumbnail" />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Mô tả
                                </td>
                                <td>
                                    <textarea name="description" rows={3}></textarea>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                </td>
                                <td>
                                    <button typeof="submit">Tạo mới</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </form>
            </Modal>
        </>
    )
}
export default ProductCreate;