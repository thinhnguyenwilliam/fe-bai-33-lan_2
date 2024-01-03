import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import Modal from 'react-modal';
import { editProduct } from "../services/ProductServices";
import { getCategoriesList } from "../services/CategoriesService";

const ProductEdit = (props) => {
    const { giatriObject, hamReload } = props;
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
        //console.log(giatriObject);
        setshowModal(true);
    }

    const closeModal = () => {
        setshowModal(false);
    }

    
        
    

    const handleSubmit =async (event) => {
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


        const result=await editProduct(giatriObject.id,objectProduct);
        if (result && result.id) {//có trả về kết quả và cả ID nữa thì mới thành công
            closeModal();
            hamReload();//reload lại giao diện

            Swal.fire({
                icon: "success",
                title: "Đã Cập nhật thành công",
                timer: 3000
            });
        }
    }

    return (
        <>
            <button onClick={openModal} >Sửa</button>
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
                                    <input name="title" defaultValue={giatriObject.title || ""} />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Danh mục
                                </td>
                                <td>
                                    {categories && (
                                        <select name="category" defaultValue={giatriObject.category || ""}>
                                            {categories.map((item, index) => (
                                                <option defaultValue={item} key={index}>{item}</option>
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
                                    <input name="price" type="number" defaultValue={giatriObject.price || 0} />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    % giảm giá
                                </td>
                                <td>
                                    <input name="discountPercentage" type="number" defaultValue={giatriObject.discountPercentage || 0} />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    số lượng còn lại trong kho
                                </td>
                                <td>
                                    <input name="stock" type="number" defaultValue={giatriObject.stock || 0} />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Hình ảnh
                                </td>
                                <td>
                                    <input name="thumbnail" defaultValue={giatriObject.thumbnail || ""} />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Mô tả
                                </td>
                                <td>
                                    <textarea name="description" rows={3} defaultValue={giatriObject.description || ""}>

                                    </textarea>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                </td>
                                <td>
                                    <button typeof="submit">Cập nhật</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </form>
            </Modal>
        </>
    )
}
export default ProductEdit;