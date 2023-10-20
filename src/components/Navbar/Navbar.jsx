import { Link, NavLink } from "react-router-dom";
import { BsFillCartPlusFill, BsDatabaseFillAdd } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import logo_white from '../../assets/logo/logo_white.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const navLinks = (
    <div className="flex flex-col md:flex-row font-medium text-black md:text-white text-xs md:text-sm lg:text-base">
        <li>
            <NavLink to="/"><AiFillHome></AiFillHome>Home</NavLink>
        </li>
        <li>
            <NavLink to="/addProduct"><BsDatabaseFillAdd></BsDatabaseFillAdd>Add Product</NavLink>
        </li>
        <li>
            <NavLink to="/carts"><BsFillCartPlusFill></BsFillCartPlusFill>My Cart</NavLink>
        </li>
        <li>
            <NavLink to="/login">Login</NavLink>
        </li>
    </div>
);

const Navbar = () => {
    return (
        <div className="navbar bg-gray-800 text-white font-montserrat lg:py-3 px-3 md:px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-28"
                    >
                        {navLinks}
                    </ul>
                </div>
                <Link to="/">
                    <div className="flex items-center">
                        <img className='w-1/12' src={logo_white} alt="" />
                        <p className="font-semibold md:text-lg">MashTech</p>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>
            <div className="navbar-end">
                {user && (
                    <div className="flex gap-1 items-center  rounded-l-full rounded-r-full p-0 w-1/2 mr-2">
                        <div className="w-1/4 md:w-1/3 lg:w-1/5">
                            <img
                                className="rounded-full mx-auto "
                                src={user?.photoURL}
                                alt=""
                            />
                        </div>
                        <div className="">
                            <h6 className="text-sm md:text-sm lg:text-base">
                                {firstName}
                            </h6>
                        </div>
                    </div>
                )}
                <div>
                    {user ? (
                        <Link to="/login">
                            <button
                                onClick={handleSignOut}
                                className="py-2 px-3 rounded-lg text-xs md:text-sm lg:btn lg:btn-success text-gray-800 bg-[#36d399] font-semibold"
                            >
                                Log out
                            </button>
                        </Link>
                    ) : (
                        <Link to="/login">
                            <button className="py-2 px-3 rounded-lg text-xs md:text-sm lg:btn lg:btn-success text-gray-800 bg-[#36d399] font-semibold">
                                Login
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
