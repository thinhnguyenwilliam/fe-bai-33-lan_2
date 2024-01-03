import Swal from 'sweetalert2'
import { DeleteProduct } from '../services/ProductServices';

const ProductDelete = (props) => {
    const { giatriObject, hamReload }=props;

    const handleDelete=async ()=>{
       const result= await DeleteProduct(giatriObject.id);
        if(result){
            hamReload();
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    }

    const confirmDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Hủy không cho xóa"
        }).then((result) => {
            if (result.isConfirmed) {

                handleDelete();
                
            }
        });
    }


    return (
        <>
            <button onClick={confirmDelete}>Xóa</button>
        </>
    )
}
export default ProductDelete;