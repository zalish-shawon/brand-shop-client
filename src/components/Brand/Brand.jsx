/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";

const Brand = () => {
    return (
        <div className="w-[90%] mx-auto mt-12 border-b border-blue-100">
            <div className="text-center">
                <h1 className="font-bold text-6xl"><span className="text-blue-500">WHY</span> CHOOSE US</h1>
                <p className="text-3xl font-semibold mt-2">World best electronics products with best price!</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-16 my-10">

                <Link to={"/appleItems"}>

                    <div className="card card-compact h-[300px]  bg-base-100 shadow-xl">
                        <figure><img src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-500x281.png" className="w-[300px] h-[200px]" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Apple</h2>
                            
                        </div>
                    </div>

                </Link>
                <Link to={"/samsungItems"}>

                    <div className="card h-[300px] card-compact  bg-base-100 shadow-xl">
                        <figure><img src="https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-1993-500x281.png" className="w-[300px] h-[200px]" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Samsung</h2>
                           
                        </div>
                    </div>

                </Link>
                <Link to={"/sonyItems"}>

                    <div className="card card-compact h-[300px]  bg-base-100 shadow-xl">
                        <figure><img src="https://1000logos.net/wp-content/uploads/2021/05/Sony-logo-500x281.png" className="w-[300px] h-[200px]" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Sony</h2>
                           
                        </div>
                    </div>

                </Link>
                <Link to={"/googleItems"}>

                    <div className="card h-[300px] card-compact  bg-base-100 shadow-xl">
                        <figure><img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="" className="w-[300px] h-[200px]"  /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Google</h2>
                            
                        </div>
                    </div>

                </Link>
                <Link to={"/microsoftItems"}>

                    <div className="card h-[300px] card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" className="w-[300px] h-[200px]" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Microsoft</h2>
                            
                        </div>
                    </div>

                </Link>
                <Link to={"/intelItems"}>

                    <div className="card h-[300px] card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://1000logos.net/wp-content/uploads/2017/02/Intel-Logo-2005-606x400.png" className="w-[300px] h-[200px]" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Intel</h2>
                           
                        </div>
                    </div>

                </Link>
            </div>
        </div>
    );
};

export default Brand;


