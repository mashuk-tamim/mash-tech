import PropTypes from "prop-types";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

ProductCards.propTypes = {
    matchedProduct: PropTypes.object.isRequired,
};

function ProductCards({ matchedProduct }) {
    const { _id, name, brand, category, price, rating, image } =
        matchedProduct || {};

    // console.log(_id, name, brand, category, description, price, rating, image);
    console.log(image, _id);

    return (
        <div className="border rounded-xl p-5 shadow-slate-400 shadow-lg space-y-2">
            <img className="w-1/2 mx-auto p-5" src={image} alt="" />
            <p className="text-xl font-bold">{name}</p>
            <Rating
                initialRating={rating}
                readonly
                emptySymbol={<BsStar className="text-[#edc967]"></BsStar>}
                fullSymbol={
                    <BsStarFill className="text-[#edc967]"></BsStarFill>
                }
            ></Rating>
            <p className="relative">
                <span className="text-2xl font-medium">
                    <sup className="text-xs absolute -left-2  -top-1">$</sup>
                    {price}
                </span>
            </p>
            {/* <p className="flex gap-1">
                <FaQuoteLeft className="text-xs text-gray-400"></FaQuoteLeft>
                {description}
                <FaQuoteRight className="text-xs text-gray-400"></FaQuoteRight>
            </p> */}
            <div className="flex justify-between text-gray-500">
                <p>
                    Brand:{" "}
                    <kbd className="kbd kbd-sm font-poppins">{brand}</kbd>
                </p>
                <p>
                    Category:{" "}
                    <kbd className="kbd kbd-sm font-poppins">{category}</kbd>
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
    );
}

export default ProductCards;
