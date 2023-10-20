/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import { useLoaderData } from "react-router-dom";
import AppleItemsCard from "./AppleItemsCard";

const AppleItems = () => {

    const appleProducts = useLoaderData();

   
    return (
        <div>
            <div className="mt-5 text-center bg-blue-gray-400 p-16">
                <h1 className="text-5xl font-bold">OUR APPLE PRODUCTS</h1>
            </div>

            <div className="mt-6 ">
                <div className="carousel ">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://cdn.krcs.co.uk/media/wysiwyg/black-friday/Multi-Product_Apple_1000x485-tinypng.png" className="w-[800px] mx-auto" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://www.doonamis.es/wp-content/uploads/2023/06/Apple-Gafas-realidad-virtual-prototipo-1.png" className="w-[800px] mx-auto" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://i.ytimg.com/vi/ZUvUwg5wLIw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAQIOxb5PlM29lSLXP0c-XVq9Btug" className="w-[800px] mx-auto" />
                    </div>

                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>

                </div>
            </div>
            <div className="grid grid-col-1 lg:grid-cols-3 gap-4 mb-20">
                {
                    appleProducts.map(product =>
                      <AppleItemsCard key={product._id} product={product}></AppleItemsCard>

                    )
                }
            </div>
        </div>
    );
};

export default AppleItems;