import { useLoaderData } from "react-router-dom";
import MicrosoftItemscards from "./MicrosoftItemscards";

const MicrosoftItems = () => {
    const msProducts = useLoaderData();
    
    return (
        <div>
        <div className="mt-5 text-center bg-blue-400 p-16">
            <h1 className="text-5xl font-bold">OUR MICROSOFT PRODUCTS</h1>
        </div>

        <div className="mt-6 ">
            <div className="carousel ">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://www.actendo.com/wordpress_2/wp-content/uploads/2021/07/Office-2022-1030x396.jpg?x77144" className="w-[800px] mx-auto" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://cdn.mos.cms.futurecdn.net/kKykJuKtUCANquFzFoq4yj.jpg" className="w-[800px] mx-auto" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/8432EE4B-B7E8-2091-7BB5059E9B1B08E5.jpg" className="w-[800px] mx-auto" />
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
                msProducts.map(product => <MicrosoftItemscards key={product._id} product={product}></MicrosoftItemscards> 
                 

                )
            }
        </div>
    </div>
    );
};

export default MicrosoftItems;