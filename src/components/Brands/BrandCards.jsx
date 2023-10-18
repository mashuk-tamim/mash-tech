
import PropTypes from 'prop-types';

BrandCards.propTypes = {
    brand: PropTypes.object.isRequired,
};

function BrandCards({brand}) {
    console.log(brand);
    const {name, image} = brand;
    return (
        <div className="flex flex-col items-center bg-[#ffe4c42c] border py-10 rounded-lg">
            <img className="w-1/4" src={image} alt={name} />
            <h3 className='text-base font-bold'>{name}</h3>
        </div>
    );
}

export default BrandCards;