import PropTypes from 'prop-types';
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";

CartDetails.propTypes = {
    cartItem: PropTypes.object.isRequired,
};

function CartDetails({cartItem}) {
    const {_id, image, name, brand, price, rating} = cartItem;

    const HandleRemoveFromCart = (id) => {
        console.log(id);

        fetch(`http://localhost:5000/carts/${id}`,{
            method: 'DELETE',
            // headers: {
            //     'content-type': 'application/json'
            // },
            // body: JSON.stringify(id)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className="border rounded-xl shadow-slate-400 shadow-lg">
            <div className="flex justify-start gap-5 p-2">
                <div className="w-1/5">
                    <img className="" src={image} alt={name} />
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-5">
                        <h3 className='font-semibold'>{name}</h3>
                        <p>
                            <kbd className="kbd kbd-sm font-poppins">
                                {brand}
                            </kbd>
                        </p>
                    </div>
                    <p className="relative">
                        <span className="text-xl font-medium">
                            <sup className="text-xs -top-3">$</sup>
                            {price}
                        </span>
                    </p>
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
                </div>
            </div>
            <div className="p-2">
                <button onClick={() => HandleRemoveFromCart(_id)} className="btn btn-ghost btn-outline btn-xs md:btn-sm w-full">
                    Remove from Cart
                </button>
            </div>
        </div>
    );
}

export default CartDetails;