import { Link, NavLink } from "react-router-dom";
import { BsFillCartPlusFill, BsDatabaseFillAdd } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import logo_white from "../../assets/logo/logo_white.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { ThemeContext } from "../../providers/ThemeProvider";

const navLinks = (
    <div className="flex flex-col md:flex-row font-medium text-black md:text-white text-xs md:text-sm lg:text-base">
        <li>
            <NavLink to="/">
                <AiFillHome></AiFillHome>Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/addProduct">
                <BsDatabaseFillAdd></BsDatabaseFillAdd>Add Product
            </NavLink>
        </li>
        <li>
            <NavLink to="/carts">
                <BsFillCartPlusFill></BsFillCartPlusFill>My Cart
            </NavLink>
        </li>
        {/* <li>
            <NavLink to="/login">Login</NavLink>
        </li> */}
    </div>
);

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );

    const {isDark, setIsDark} = useContext(ThemeContext);

    const handleToggle = (e) => {
        if(e.target.checked){
            setTheme('dark');
            setIsDark(true);
            console.log(isDark);
        }
        else{
            setTheme('light')
            setIsDark(false);
            console.log(isDark);
        }
    }

    useEffect(()=>{
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector('html').setAttribute('data-theme', localTheme);

    },[theme])
    const firstName = user?.displayName?.split(" ")[0];

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal("Log Out", "Successful", "success");
            })
            .catch((error) => {
                console.error(error.code, error.message);
            });
    };
    return (
        <div
            className={`navbar ${
                isDark ? "bg-gray-600" : "bg-gray-800"
            } text-white font-montserrat lg:py-3 px-3 md:px-6`}
        >
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
                        <img className="w-1/12" src={logo_white} alt="" />
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
                                onClick={handleLogOut}
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
                <div>
                    <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input
                            onChange={handleToggle}
                            type="checkbox"
                            checked={theme === "light" ? false : true}
                        />

                        {/* sun icon */}
                        <svg
                            className="swap-on fill-current w-10 h-10"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-off fill-current w-10 h-10"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
