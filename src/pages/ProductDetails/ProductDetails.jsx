import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";
import swal from "sweetalert";
import { ThemeContext } from "../../providers/ThemeProvider";

const ProductDetails = () => {
    const [products, setProducts] = useState([]);
    const {isDark} = useContext(ThemeContext);

    useEffect(() => {
        fetch("https://mash-tech-server.vercel.app/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);
    const { id } = useParams();
    // console.log(id, products);

    const matchedProduct = products.find(
        (matchedProduct) => matchedProduct._id === id
    );
    console.log(matchedProduct);

    const { name, brand, category, description, price, rating, image } =
        matchedProduct || {};

    const handleAddToCart = () => {
        fetch("https://mash-tech-server.vercel.app/carts", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(matchedProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    swal("Added to Cart", " Successfully!", "success");
                }
            });
    };

    return (
        <div className={`p-5 lg:w-3/4 mx-auto ${isDark && 'text-white'}`}>
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
                    <p className="w-full mx-auto text-justify">{description}</p>
                    <div className="flex justify-between text-gray-500">
                        <p>
                            Brand: <kbd className="kbd kbd-sm">{brand}</kbd>
                        </p>
                        <p>
                            Category:
                            <kbd className="kbd kbd-sm">{category}</kbd>
                        </p>
                    </div>
                    <div className="pt-3 space-y-2">
                        <button
                            onClick={handleAddToCart}
                            className="btn btn-xs md:btn-sm w-full btn-ghost btn-outline"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
