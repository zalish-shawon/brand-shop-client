/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";

const Brand = () => {
    return (
        <div className="">

        
        <div className="w-[90%] mx-auto mt-12 border-b border-blue-100">
            <div className="text-center pt-5">
                <h1 className="font-bold text-6xl"><span className="text-blue-500">WHY</span> CHOOSE US</h1>
                <p className="text-3xl font-semibold mt-2">World best electronics products with best price!</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-16 my-10">

                <Link to={"/appleItems"}>

                    <div className="card card-compact h-[300px]   shadow-xl">
                        <figure><img src="https://www.svgrepo.com/show/69341/apple-logo.svg" className="w-[300px] h-[200px]" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Apple</h2>
                            
                        </div>
                    </div>

                </Link>
                <Link to={"/samsungItems"}>

                    <div className="card h-[300px] card-compact   shadow-xl">
                        <figure><img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/samsung_logo_icon_169775.png" className="w-[300px] h-[200px]" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Samsung</h2>
                           
                        </div>
                    </div>

                </Link>
                <Link to={"/sonyItems"}>

                    <div className="card card-compact h-[300px]   shadow-xl">
                        <figure><img src="https://cdn.freebiesupply.com/logos/thumbs/2x/sony-logo.png" className="w-[300px] h-[200px]" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Sony</h2>
                           
                        </div>
                    </div>

                </Link>
                <Link to={"/googleItems"}>

                    <div className="card h-[300px] card-compact   shadow-xl">
                        <figure><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/640px-Google_%22G%22_Logo.svg.png" alt="" className="w-[300px] h-[200px]"  /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Google</h2>
                            
                        </div>
                    </div>

                </Link>
                <Link to={"/microsoftItems"}>

                    <div className="card h-[300px] card-compact  shadow-xl">
                        <figure><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" className="w-[300px] h-[200px]" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Microsoft</h2>
                            
                        </div>
                    </div>

                </Link>
                <Link to={"/intelItems"}>

                    <div className="card h-[300px] card-compact  shadow-xl">
                        <figure><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/2560px-Intel_logo_%282006-2020%29.svg.png" className="w-[300px] h-[200px]" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Intel</h2>
                           
                        </div>
                    </div>

                </Link>
            </div>
        </div>
        </div>
    );
};

export default Brand;


