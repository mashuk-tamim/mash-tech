
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

BrandCards.propTypes = {
    brand: PropTypes.object.isRequired,
};

function BrandCards({brand}) {
    // console.log(brand);
    const {_id, name, logo} = brand;
    return (
        <Link to={`/brand/${_id}`}>
            <div className="flex flex-col items-center border hover:bg-slate-200 hover:text-black py-10 rounded-lg">
                <img className="w-1/4" src={logo} alt={name} />
                <h3 className="text-base font-bold">{name}</h3>
            </div>
        </Link>
    );
}

export default BrandCards;