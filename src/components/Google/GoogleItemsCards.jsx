/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";

const GoogleItemsCards = ({product}) => {
    const {_id, name, image, rating, brand, type, price} = product;

    return (
        <div class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
            <img
                src={image}
                class="object-cover w-full h-full"
            />
        </div>
        <div class="p-6">
            <div class="flex items-center justify-between mb-2">
                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    {name}
                </p>
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
                        {rating}
                    </p>
                </div>
                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                    ${price}
                </p>
            </div>
            <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                Brand: {brand}
            </p>
            <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                Type: {type}
            </p>
        </div>
        <div class="p-6 pt-0">
           <Link to={`/details/${_id}`}>
           <button
                class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
            >
                Details
            </button>
           </Link>
        </div>
        <div class="p-6 pt-0">
            <Link to={`/updateProduct/${_id}`}> 
            <button
                class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
            >
                Update product
            </button>
            </Link>
        </div>
    </div>
    );
};

export default GoogleItemsCards;