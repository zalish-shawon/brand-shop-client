/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */
import { useLoaderData, useParams } from "react-router-dom";
import SamsungItemsCard from "./SamsungItemsCard";

const SamsungItems = () => {
    const products = useLoaderData();
    const {name} = products
    console.log(name);
    
    const samsungProducts = products.filter(product => product.brand.toLowerCase() === 'samsung');
    console.log(samsungProducts);
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
                    <img src="https://www.apple.com/newsroom/images/product/services/lifestyle/Apple-Data-Privacy-Day-hero.jpg.og.jpg?202310101640" className="w-[800px] mx-auto" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://techmarkup.com/wp-content/uploads/2022/06/1655224039_Check-out-the-prices-Apple-confirms-the-launch-of-the.jpeg" className="w-[800px] mx-auto" />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>

            </div>
        </div>
        <div className="grid grid-cols-3 gap-4 p-16">
            {
                samsungProducts.map(product => <SamsungItemsCard key={product._id} product={product}></SamsungItemsCard>
                 

                )
            }
        </div>
    </div>
    );
};

export default SamsungItems;