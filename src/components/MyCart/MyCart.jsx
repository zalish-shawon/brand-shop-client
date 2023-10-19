/* eslint-disable react/no-unknown-property */

import { useLoaderData } from "react-router-dom";
import MyCartitems from "./MyCartitems";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyCart = () => {
    const {user} = useContext(AuthContext)
    const userEmail = user.email
    const cartItems = useLoaderData()
    const myCartItems = cartItems.filter(item => item.userEmail === userEmail)
    // console.log(myCartItems);
    const [items, setItem] = useState(myCartItems)
    
    return (
        <div>
            <div className="mt-5 mb-10 text-center bg-red-200 p-16">
                <h1 className="text-5xl font-bold">Cart Items {items.length}</h1>
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