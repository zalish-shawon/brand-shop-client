/* eslint-disable react/no-unknown-property */
import {  useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const ProductDetails = () => {
    const product = useLoaderData()
    const {user} = useContext(AuthContext)
    const userEmail = user.email;
    const {_id, name, image, price} = product
    const selectedItem = {name, image, price, userEmail}
    
    
    const handleAddToCart = () => {
        fetch("http://localhost:5001/myCarts", {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            body: JSON.stringify(selectedItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire(
                    'Good job!',
                    'Product added in cart',
                    'success'
                  )
            }
        })
        
        
    }
    return (
        <div>
            <div className="mt-5 mb-10 text-center bg-yellow-900 p-16">
                <h1 className="text-5xl font-bold">{product.name} DETAILS</h1>
            </div>
            <div className="flex justify-center items-center mt-24 mb-24">
                <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                        <img
                            src={product.image}
                            alt="image"
                            class="object-cover w-full"
                        />
                    </div>
                    <div class="p-6">
                        <h6 class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                            {product.brand}
                        </h6>
                        <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                           {product.name}
                        </h4>
                        <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                           {product.description}
                        </p>
                        <div className="flex justify-between items-center">
                            <p className="font-bold text-lg">${product.price}</p>
                            <div className="flex items-center gap-2">
                    
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        class="-mt-0.5 h-5 w-5 text-yellow-700"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        {product.rating}
                    </p>
                </div>
                        </div>
                        <a class="inline-block" href="#">
                            
                            <button onClick={() => handleAddToCart(_id)}
                                class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none bg-pink-300 hover:bg-pink-500/80 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Add to cart
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="w-4 h-4"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    ></path>
                                </svg>
                            </button>
                            
                            
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;