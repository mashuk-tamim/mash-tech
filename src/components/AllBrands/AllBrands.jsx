import { useEffect, useState } from "react";
import BrandCards from "./BrandCards";

const AllBrands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch("/brands.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setBrands(data);
            });
    }, []);
    console.log(brands);
    return (
        <div>
            <h2 className="text-4xl font-bold">Our Trusted Brands</h2>
            Total brands: {brands.length}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {brands.map((brand) => (
                    <BrandCards key={brand.id} brand={brand}></BrandCards>
                ))}
            </div>
        </div>
    );
};

export default AllBrands;
