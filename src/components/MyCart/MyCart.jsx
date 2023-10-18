/* eslint-disable react/no-unknown-property */

import { useLoaderData } from "react-router-dom";
import MyCartitems from "./MyCartitems";

const MyCart = () => {
    const cartItems = useLoaderData()
    
    return (
        <div>
            <div className="mt-5 mb-10 text-center bg-red-200 p-16">
                <h1 className="text-5xl font-bold">Cart Items</h1>
            </div>

            <div class="bg-gray-100  py-8 ">
                <div class="container  mx-auto px-4 ">

                    {
                        cartItems.map(item => <MyCartitems key={item._id} item={item}></MyCartitems>)
                    }
                </div>
            </div>

        </div>
    );
};

export default MyCart;