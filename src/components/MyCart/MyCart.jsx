/* eslint-disable react/no-unknown-property */

import { useLoaderData } from "react-router-dom";
import MyCartitems from "./MyCartitems";
import { useState } from "react";

const MyCart = () => {
    const cartItems = useLoaderData()
    const [items, setItem] = useState(cartItems)
    
    return (
        <div>
            <div className="mt-5 mb-10 text-center bg-red-200 p-16">
                <h1 className="text-5xl font-bold">Cart Items</h1>
            </div>

            <div class="bg-gray-100  py-8 ">
                <div class="container  mx-auto px-4 ">

                    {
                        items.map(item => <MyCartitems setItem={setItem} items={items} key={item._id} item={item}></MyCartitems>)
                    }
                </div>
            </div>

        </div>
    );
};

export default MyCart;