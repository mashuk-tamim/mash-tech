
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

BrandCards.propTypes = {
    brand: PropTypes.object.isRequired,
};

function BrandCards({brand}) {
    console.log(brand);
    const {id, name, image} = brand;
    return (
        <Link to={`/brand/${id}`}>
            <div className="flex flex-col items-center border hover:bg-slate-200 hover:text-black py-10 rounded-lg">
                <img className="w-1/4" src={image} alt={name} />
                <h3 className="text-base font-bold">{name}</h3>
            </div>
        </Link>
    );
}

export default BrandCards;