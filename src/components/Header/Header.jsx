import { Link, NavLink } from "react-router-dom";
import Hero from "../Hero/Hero";

const Header = () => {
    return (
        <div className="w-[95%] mx-auto">
            <nav>
                <div className="navbar bg-base-100">
                    
                    <div className="flex-1 mr-4">
                        <img className="w-[100px]" src="/logo.png" alt="" />
                    </div>
                    <div className="flex-none">
                        <ul className="flex gap-5 items-center font-semibold">
                            <NavLink to={"/"}><a>Home</a></NavLink>
                            <NavLink to={"/addProduct"}><a>Add product</a></NavLink>
                            <NavLink to={"/myCart"}><a>My cart</a></NavLink>
                            <NavLink to={"/login"}> <button className="btn btn-primary text-white">Login</button> </NavLink>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
            <Hero></Hero>
        </div>
    );
};

export default Header;