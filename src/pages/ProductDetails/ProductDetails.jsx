import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";
// import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductDetails = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);
    const { id } = useParams();
    console.log(id, products);

    const matchedProduct = products.find(
        (matchedProduct) => matchedProduct._id === id
    );
    console.log(matchedProduct);

    const { _id, name, brand, category, description, price, rating, image } =
        matchedProduct || {};

    console.log(_id, name, brand, category, description, price, rating, image);


    return (
        <div className="p-5 lg:w-3/4 mx-auto">
            <h2>Product Details</h2>
            <div className="border rounded-xl p-5 shadow-xl space-y-2 lg:py-10">
                <img
                    className="w-5/6 md:w-1/2 mx-auto p-5"
                    src={image}
                    alt=""
                />
                <div className="lg:w-3/4 mx-auto text-center">
                    <p className="text-xl md:text-3xl font-bold text-center">
                        {name}
                    </p>
                    <p className="md:text-xl lg:text-2xl">
                        <Rating
                            initialRating={rating}
                            readonly
                            emptySymbol={
                                <BsStar className="text-[#edc967]"></BsStar>
                            }
                            fullSymbol={
                                <BsStarFill className="text-[#edc967]"></BsStarFill>
                            }
                        ></Rating>
                    </p>
                    <p className="relative">
                        <span className="text-2xl font-medium">
                            <sup className="text-xs -top-3">$</sup>
                            {price}
                        </span>
                    </p>
                    <div className="flex gap-1 justify-center">
                        <p>
                            <FaQuoteLeft className="text-xs text-gray-400"></FaQuoteLeft>
                        </p>
                        <p className="text-center w-full mx-auto">
                            {description}
                        </p>
                        <FaQuoteRight className="text-xs text-gray-400"></FaQuoteRight>
                    </div>
                    <div className="flex justify-between text-gray-500">
                        <p>
                            Brand: <kbd className="kbd kbd-sm">{brand}</kbd>
                        </p>
                        <p>
                            Category:{" "}
                            <kbd className="kbd kbd-sm">{category}</kbd>
                        </p>
                    </div>
                    <div className="pt-3 space-y-2">
                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-xs md:btn-sm w-full btn-ghost btn-outline">
                                Details
                            </button>
                        </Link>
                        <button className="btn btn-xs md:btn-sm w-full btn-ghost btn-outline">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;