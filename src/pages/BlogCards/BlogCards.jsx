
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

BlogCards.propTypes = {
    blog: PropTypes.object.isRequired,
};

function BlogCards({blog}) {
    console.log(blog);
    const {_id, name, title, body, image} = blog;
    console.log(_id)
    return (
        <div className="bg-black space-y-2">
            <div className="m-1">
                <img
                    className="bg-white border-black object-cover overflow-hidden h-[180px] w-full"
                    src={image}
                    alt=""
                />
            </div>
            <div className="py-2 px-5">
                <h2 className="text-gray-400">{name}</h2>
                <Link to={`/blogDetails/${_id}`}>
                    <p className="text-2xl font-semibold  text-gray-300">
                        {title}
                    </p>
                </Link>
                <p className="text-gray-400 text-sm">{body.slice(0, 150)}...</p>
            </div>
        </div>
    );
}

export default BlogCards;