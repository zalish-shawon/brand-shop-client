import { useLoaderData } from "react-router-dom";
import IntelItemsCards from "./IntelItemsCards";

const IntelItems = () => {
    const products = useLoaderData();
    const {name} = products
    console.log(name);
    
    const intelProducts = products.filter(product => product.brand.toLowerCase() === 'intel');
    
    return (
        <div>
        <div className="mt-5 text-center bg-blue-400 p-16">
            <h1 className="text-5xl font-bold">OUR INTEL PRODUCTS</h1>
        </div>

        <div className="mt-6 ">
            <div className="carousel ">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://promotions.newegg.com/FlagShip/intel/banner_1.jpg" className="w-[800px] mx-auto" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabYlUkX3xMBiaUL7QOpOXJFZdqdYup2jE9lT4JDHqc2X8522CYJXYUSzQB4uTFYdvZgU&usqp=CAU" className="w-[800px] mx-auto" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://xanxogaming.com/wp-content/uploads/2022/10/13900K-Review-Banner-800x445.jpg" className="w-[800px] mx-auto" />
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
                intelProducts.map(product => <IntelItemsCards key={product._id} product={product} ></IntelItemsCards> 
                 

                )
            }
        </div>
    </div>
    );
};

export default IntelItems;