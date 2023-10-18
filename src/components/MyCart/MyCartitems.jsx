/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import Swal from 'sweetalert2'

const MyCartitems = ({item, setItem, items}) => {
    const {_id, name, image, price} = item
   
   

    const handleDeleteItem = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5001/myCarts/${_id}`, {
                    method: "DELETE",
                })

                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )

                          const remainingItem = items.filter(item => item._id !== _id);
                          setItem(remainingItem)
                    }
                })
              
            }
          })
    }
    return (
        <div>
            <div class="flex flex-col md:flex-row justify-center">
                        <div class="md:w-3/4">
                            <div class="bg-red-100  rounded-lg shadow-md p-6 mb-4">
                                <table class="w-full">
                                    <thead>
                                        <tr>
                                            <th class="text-left font-semibold">Product</th>
                                            <th class="text-left font-semibold">Price</th>

                                            <th class="text-left font-semibold">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="py-4">
                                                <div class="flex items-center">
                                                    <img class="h-16 w-16 mr-4" src= {image} alt="Product image" />
                                                    <span class="font-semibold">{name}</span>
                                                </div>
                                            </td>
                                            <td class="py-4">${price}</td>

                                            
                                            <button onClick={()=> handleDeleteItem(_id)}  class="btn btn-circle btn-outline mt-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
        </div>
    );
};

export default MyCartitems;