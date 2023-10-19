import PropTypes from "prop-types";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";
// import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


ProductCards.propTypes = {
    matchedProduct: PropTypes.object.isRequired,
};

function ProductCards({ matchedProduct }) {
    const { _id, name, brand, category, description, price, rating, image } = matchedProduct;
    
    // console.log(_id, name, brand, category, description, price, rating, image);
    console.log(image, _id)
    
    return (
        <div className="border rounded-xl p-5 shadow-xl">
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
            <p>
                <span className="text-2xl font-medium">
                    <sup className="text-xs">$</sup>
                    {price}
                </span>
            </p>
            <p className="flex gap-1">
                <FaQuoteLeft className="text-xs text-gray-400"></FaQuoteLeft>
                {description}
                <FaQuoteRight className="text-xs text-gray-400"></FaQuoteRight>
            </p>
            <div className="flex justify-between text-gray-500">
                <p>
                    Brand: <kbd className="kbd kbd-sm">{brand}</kbd>
                </p>
                <p>
                    Category: <kbd className="kbd kbd-sm">{category}</kbd>
                </p>
            </div>
            {/* <p>{rating}</p> */}
        </div>
    );
}

export default ProductCards;
