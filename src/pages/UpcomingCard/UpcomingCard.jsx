import { FaQuoteLeft } from "react-icons/fa";
import PropTypes from "prop-types";

UpcomingCard.propTypes = {
    upcomingProduct: PropTypes.object.isRequired,
};

function UpcomingCard({ upcomingProduct }) {
    // console.log(upcomingProduct);
    const { name, brand, category, description, price, date, image } =
        upcomingProduct || {};
    // console.log(_id, name, brand, category, price, date, image);
    return (
        <div className="border rounded-xl p-5 shadow-slate-400 shadow-lg space-y-2 h-[530px] mb-10">
            <img className="h-1/2 mx-auto p-5" src={image} alt="" />
            <p className="text-xl font-bold">{name}</p>
            <p className="relative">
                <span className="text-2xl font-medium">
                    <sup className="text-xs absolute -left-2  -top-1">$</sup>
                    {price}
                    <span className="text-gray-500 text-base">(estimated)</span>
                </span>
            </p>
            <p className="flex gap-1">
                <FaQuoteLeft className="text-xs text-gray-400"></FaQuoteLeft>
                {description}
            </p>
            <p>
                Brand:
                <kbd className="kbd kbd-sm font-poppins">{brand}</kbd>
            </p>
            <p>
                Category:
                <kbd className="kbd kbd-sm font-poppins">{category}</kbd>
            </p>
            <p>Release Date: {date}</p>
        </div>
    );
}

export default UpcomingCard;
