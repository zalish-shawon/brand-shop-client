/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import { useLoaderData } from "react-router-dom";
import SamsungItemsCard from "./SamsungItemsCard";

const SamsungItems = () => {
    const samsungProducts = useLoaderData();
    
    return (
        <div>
        <div className="mt-5 text-center bg-blue-400 p-16">
            <h1 className="text-5xl font-bold">OUR SAMSUNG PRODUCTS</h1>
        </div>

        <div className="mt-6 ">
            <div className="carousel ">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://luxuryasiainsider.files.wordpress.com/2020/07/samsung-x-shopee-pr.png?w=723" className="w-[800px] mx-auto" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://live.staticflickr.com/65535/50350906283_7f8fc61156_o.jpg" className="w-[800px] mx-auto" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://solusinews.id/wp-content/uploads/2021/09/Samsung-x-Lazada-Super-Brand-Day-2021.png" className="w-[800px] mx-auto" />
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
                samsungProducts.map(product => <SamsungItemsCard key={product._id} product={product}></SamsungItemsCard>
                 

                )
            }
        </div>
    </div>
    );
};

export default SamsungItems;