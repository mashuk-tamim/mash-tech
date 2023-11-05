import { useEffect, useState } from "react";
import BrandCards from "./BrandCards";

const AllBrands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch("https://mash-tech-server.vercel.app/brands")
            .then((res) => res.json())
            .then((data) => {
                setBrands(data);
            });
    }, []);
    // console.log(brands);
    return (
        <div className="my-10">
            <h2 className="text-4xl font-bold text-center pb-5">Our Trusted Brands</h2>
            {/* Total brands: {brands.length} */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {brands.map((brand, idx) => (
                    <BrandCards key={idx} brand={brand}></BrandCards>
                ))}
            </div>
        </div>
    );
};

export default AllBrands;
