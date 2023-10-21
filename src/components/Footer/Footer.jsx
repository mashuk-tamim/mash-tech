import { Link, useLocation } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";

const Footer = () => {
    const { isDark } = useContext(ThemeContext);
    const [isBlog, setIsBlog] = useState(false)
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/blog' || location.pathname === '/addBlog'){
            setIsBlog(true);
        }
        else{
            setIsBlog(false);
        }
    }, [location]);
    return (
        <div className={`${isDark ? "bg-gray-600" : "bg-gray-800"}`}>
            <footer className=" p-5 md:p-10 text-white rounded space-y-3 md:space-y-5 flex flex-col items-center">
                <div className="flex flex-wrap gap-3 md:gap-5 lg:gap-10 text-sm md:text-base text-center">
                    <Link to="/">Home</Link>
                    <Link to="/cart">My Cart</Link>
                    <Link to="/blog">Blog</Link>
                </div>
                <div className="flex flex-wrap gap-3 md:gap-5 lg:gap-10 text-sm md:text-base text-center">
                    <Link to="/addBrand">Add Brands</Link>
                    <Link to="/addProduct">Add Product</Link>
                    {isBlog && (
                        <>
                            <Link to="/addBlog">Add Blog</Link>
                        </>
                    )}
                    <Link to="/addReview">Add Review</Link>
                    <Link to="/upcoming">Add Upcoming</Link>
                </div>
                <div>
                    <div className="flex gap-3 md:gap-5 lg:gap-10 mx-auto">
                        <Link>
                            <img
                                className="w-6 md:w-10"
                                src="https://i.ibb.co/zhkdM6g/facebook.png"
                                alt="facebook"
                            />
                        </Link>
                        <Link>
                            <img
                                className="w-6 md:w-10"
                                src="https://i.ibb.co/dDBQV4v/instagram.png"
                                alt="instagram"
                            />
                        </Link>
                        <Link>
                            <img
                                className="w-6 md:w-10"
                                src="https://i.ibb.co/Ldtpsmp/linkedin.png"
                                alt="linkedin"
                            />
                        </Link>
                        <Link>
                            <img
                                className="w-6 md:w-10"
                                src="https://i.ibb.co/h25JHxq/twitter.png"
                                alt="linkedin"
                            />
                        </Link>
                        <Link>
                            <img
                                className="w-6 md:w-10"
                                src="https://i.ibb.co/CWnVNbc/youtube.png"
                                alt="youtube"
                            />
                        </Link>
                    </div>
                </div>
                <div>
                    <p className="flex items-center gap-1">
                        <FiMail></FiMail>info@mashtech.com
                    </p>
                    <p className="flex items-center gap-1">
                        <LuPhoneCall></LuPhoneCall>+880 1849456959
                    </p>
                </div>
                <aside>
                    <p className="text-gray-300 text-xs">
                        Copyright © 2023 - All right reserved by MashTech.com
                    </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
