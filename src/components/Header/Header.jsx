import { useContext } from "react";
import {  Link, NavLink } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Provider/AuthProvider";



const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    
    const handleLogOut = () => {
        logOut()
        .then(res => {
            Swal.fire(
                'Good bye!',
                'User Logged out!',
                'success'
              )
        })
        .catch(error => {
            console.error(error.message);
        })
    }

    return (
        <header >

        
        <div className="w-[95%] mx-auto">
            <nav>
                <div className="navbar bg-base-100">
                    
                    <div className="flex-1 mr-4">
                        <Link to={"/"}><img className="w-[100px]" src="/logo.png" alt="" /></Link>
                    </div>
                    <div className="flex-none">
                        <ul className="flex flex-col lg:flex-row gap-5 items-center font-semibold">
                        
                            <NavLink to={"/"}><a>Home</a></NavLink>
                            <NavLink to={"/addProducts"}><a>Add product</a></NavLink>
                            <NavLink to={"/myCart"}><a>My cart</a></NavLink>
                            {
                                    user ?
                                        <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
                                            <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
                                                <p>{user?.displayName}</p>
                                                <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={user.photoURL} alt="" />
                                            </div>
                                            <a onClick={handleLogOut} className=" btn btn-primary">Logout</a>
                                            </div>
                                            :
                                            <NavLink to={"/userLogin"}> <button className="btn btn-primary text-white">Login</button> </NavLink>
                                }
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
           
        </div>
        </header>
    );
};

export default Header;