/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";

const Brand = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="font-bold text-6xl"><span className="text-blue-500">WHY</span> CHOOSE US</h1>
                <p className="text-3xl font-semibold mt-2">World best electronics products with best price!</p>
            </div>
            <div className="grid grid-cols-3 gap-x-4 gap-y-16 p-20">
                <Link to={"/appleItems"}>
                
                <div class="cursor-pointer relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
                <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white  shadow-blue-gray-500/40">
                    <img
                        src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-500x281.png"
                        alt="img-blur-shadow"
                        layout="fill"
                    />
                </div>
                <div class="p-6">
                    <h5 class="block mb-2 font-sans text-2xl text-center antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Apple
                    </h5>

                </div>

            </div>
                
                </Link>
                <Link to={"/samsungItems"}>
                
                <div class="cursor-pointer relative  flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
                <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white  shadow-blue-gray-500/40">
                    <img
                        src="https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-1993-500x281.png"
                        alt="img-blur-shadow"
                        layout="fill"
                    />
                </div>
                <div class="p-6">
                    <h5 class="block mb-2 font-sans text-2xl text-center antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Samsung
                    </h5>

                </div>

            </div>
                
                </Link>
                <Link to={"/sonyItems"}>
                
                <div class="cursor-pointer relative  flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
                <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white  shadow-blue-gray-500/40">
                    <img
                        src="https://1000logos.net/wp-content/uploads/2021/05/Sony-logo-500x281.png"
                        alt="img-blur-shadow"
                        layout="fill"
                    />
                </div>
                <div class="p-6">
                    <h5 class="block mb-2 font-sans text-2xl text-center antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Sony
                    </h5>

                </div>

            </div>
                
                </Link>
                <Link to={"/googleItems"}>
                
                <div class="cursor-pointer relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
                <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white  shadow-blue-gray-500/40">
                    <img
                        src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
                        alt="img-blur-shadow"
                        layout="fill"
                    />
                </div>
                <div class="p-6">
                    <h5 class="block mb-2 font-sans text-2xl text-center antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Google
                    </h5>

                </div>

            </div>
                
                </Link>
                <Link to={"/microsoftItems"}>
                
                <div class="cursor-pointer relative  flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
                <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white  shadow-blue-gray-500/40">
                    <img className="mt-8"
                        src="https://1000logos.net/wp-content/uploads/2017/04/Microsoft-Logo.png"
                        alt="img-blur-shadow"
                        layout="fill"
                    />
                </div>
                <div class="p-6">
                    <h5 class="block mb-2 font-sans text-2xl text-center antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Microsoft
                    </h5>

                </div>

            </div>
                
                </Link>
                <Link to={"/intelItems"}>
                
                <div class="cursor-pointer relative  flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
                <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white  shadow-blue-gray-500/40">
                    <img
                        src="https://1000logos.net/wp-content/uploads/2017/02/Intel-Logo-2005-606x400.png"
                        alt="img-blur-shadow"
                        layout="fill"
                    />
                </div>
                <div class="p-6">
                    <h5 class="block mb-2 font-sans text-2xl text-center antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                       Intel
                    </h5>

                </div>

            </div>
                
                </Link>
            </div>
        </div>
    );
};

export default Brand;