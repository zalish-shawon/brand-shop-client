import { useLoaderData } from "react-router-dom";
import GoogleItemsCards from "./GoogleItemsCards";

const GoogleItems = () => {

    const googleProducts = useLoaderData();
    
    return (
        <div>
        <div className="mt-5 text-center bg-blue-400 p-16">
            <h1 className="text-5xl font-bold">OUR GOOGLE PRODUCTS</h1>
        </div>

        <div className="mt-6 ">
            <div className="carousel ">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://www.hardwarezone.com.sg/thumbs/news/707431/t.jpg" className="w-[800px] mx-auto" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ytimg.com/vi/otomCbnwsv0/maxresdefault.jpg" className="w-[800px] mx-auto" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://www.ytechb.com/wp-content/uploads/2023/10/Pixel-8-Pro-buyers-guide-1.webp" className="w-[800px] mx-auto" />
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
                googleProducts.map(product => <GoogleItemsCards key={product._id} product={product}></GoogleItemsCards> 
                 

                )
            }
        </div>
    </div>
    );
};

export default GoogleItems;