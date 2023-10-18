import { useLoaderData, useParams } from "react-router-dom";


const BrandDetails = () => {
    const brands = useLoaderData();
    const {id} = useParams();
    console.log(id);
    
    const brand = brands.find(brand => brand.id == id);
    console.log(brand);
    return (
        <div>
            {brand.name}
            <img src={brand.image} alt="" />
        </div>
    );
};

export default BrandDetails;