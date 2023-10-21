import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCards from "../ProductCards/ProductCards";

const BrandProducts = () => {
    const brands = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    // console.log(brands, intId);

    const brand = brands.find((brand) => brand.id === intId);
    // console.log(brand);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://mash-tech-server.vercel.app/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                console.log(data);
            });
    }, []);

    // console.log(products);

    const matchedProducts = products?.filter(
        (product) => product.brand === brand.name
    );
    console.log(matchedProducts);

    return (
        <div className="mt-10 mb-20">
            {/* <h2>All Products: {products?.length}</h2> */}
            <p className="text-4xl font-bold text-center py-5">
                {brand.name} Products
            </p>
            {matchedProducts && (
                <>
                    <p className="text-2xl font-semibold text-center">
                        Opps<span className="text-red-600">!</span>
                    </p>
                    <img
                    className="w-1/2 mx-auto"
                        src="https://i.postimg.cc/gJQJvmBx/no-data-found.png"
                        alt=""
                    />
                </>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 h-auto">
                {matchedProducts?.map((matchedProduct) => (
                    <ProductCards
                        matchedProduct={matchedProduct}
                        key={matchedProduct._id}
                    ></ProductCards>
                ))}
            </div>
        </div>
    );
};

export default BrandProducts;
