import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    console.log(id);

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("https://mash-tech-server.vercel.app/blogs")
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
            });
    }, []);

    const matchedBlog = blogs?.find((matchedBlog) => matchedBlog?._id === id);

    const { name, title, body, image } = matchedBlog || {};

    console.log(matchedBlog, name);
    return (
        <div className="bg-black">
            <div className="m-1">
                <img
                    className="bg-white border-black object-cover overflow-hidden w-full"
                    src={image}
                    alt=""
                />
            </div>
            <div className="py-2 px-5">
                <h2 className="text-gray-400">{name}</h2>
                <p className="text-2xl font-semibold  text-gray-300">{title}</p>
                <p className="text-gray-400 text-sm">{body}</p>
            </div>
        </div>
    );
};

export default BlogDetails;
