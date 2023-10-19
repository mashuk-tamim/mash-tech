import PropTypes from "prop-types";
import Rating from "react-rating";
import { BsStar, BsStarFill } from "react-icons/bs";
import Swal from "sweetalert2";

CartDetails.propTypes = {
    cartItem: PropTypes.object.isRequired,
    carts: PropTypes.array.isRequired,
    setCarts: PropTypes.func.isRequired,
};

function CartDetails({ cartItem, carts, setCarts }) {
    const { _id, image, name, brand, price, rating } = cartItem;

    const HandleRemoveFromCart = (id) => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(
                    `https://mash-tech-server-drq2abpar-mashuk-tamims-projects.vercel.app/carts/${id}`,
                    {
                        method: "DELETE",
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your product has been deleted from cart.",
                                "success"
                            );
                            const remainingCart = carts.filter(
                                (remaining) => remaining._id !== id
                            );
                            setCarts(remainingCart);
                        }
                    });
            }
        });
    };
    return (
        <div className="border rounded-xl shadow-slate-400 shadow-lg">
            <div className="flex justify-start gap-5 p-2">
                <div className="w-1/5">
                    <img className="" src={image} alt={name} />
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-5">
                        <h3 className="font-semibold">{name}</h3>
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
                <button
                    onClick={() => HandleRemoveFromCart(_id)}
                    className="btn btn-ghost btn-outline btn-xs md:btn-sm w-full"
                >
                    Remove from Cart
                </button>
            </div>
        </div>
    );
}

export default CartDetails;
