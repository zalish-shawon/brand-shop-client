import { useLoaderData } from "react-router-dom";
import SonyItemsCards from "./SonyItemsCards";

const SonyItems = () => {
    const sonyProducts = useLoaderData();
   
    
    return (
        <div>
            <div>
        <div className="mt-5 text-center bg-blue-400 p-16">
            <h1 className="text-5xl font-bold">OUR SONY PRODUCTS</h1>
        </div>

        <div className="mt-6 ">
            <div className="carousel ">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://pbs.twimg.com/media/E1mJW20VgAYWx_G.jpg" className="w-[800px] mx-auto" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://s3.amazonaws.com/pr-prd-live-dolphin-upload-cfn/sites/261/2019/10/09055245/festive-1.jpg" className="w-[800px] mx-auto" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.pinimg.com/originals/dd/11/84/dd118407269d17c4e458848239ea442f.jpg" className="w-[800px] mx-auto" />
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
                sonyProducts.map(product => <SonyItemsCards key={product._id} product={product}></SonyItemsCards>
                 

                )
            }
        </div>
    </div>
        </div>
    );
};

export default SonyItems;