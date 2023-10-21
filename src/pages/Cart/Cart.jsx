import { useEffect, useState } from "react";
import CartDetails from "../CartDetails/CartDetails";

const Cart = () => {
    const [carts, setCarts] = useState();
    useEffect(() => {
        fetch("https://mash-tech-server.vercel.app/carts")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCarts(data);
            });
    }, []);
    console.log(carts);
    return (
        <div className="p-5">
            <h2 className="text-2xl text-center pb-5">
                Cart items: {carts?.length}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {carts?.map((cartItem) => (
                    <CartDetails
                        cartItem={cartItem}
                        key={cartItem._id}
                        carts={carts}
                        setCarts={setCarts}
                    ></CartDetails>
                ))}
            </div>
        </div>
    );
};

export default Cart;
