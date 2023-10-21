import { useEffect, useState } from "react";
// import { useContext } from "react";
// import { ThemeContext } from "../../providers/ThemeProvider";
import ReviewCard from "../../pages/ReviewCard/ReviewCard";

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    // const { isDark } = useContext(ThemeContext);

    useEffect(() => {
        fetch("https://mash-tech-server.vercel.app/testimonials")
            .then((res) => res.json())
            .then((data) => {
                setTestimonials(data);
            });
    }, []);
    return (
        <div className="bg-[#ffcccb4e] p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center pb-5 border-gray-500 mx-auto pt-16 mb-10">
                Testimonial
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {testimonials?.slice(0, 3).map((testimonial) => (
                    <ReviewCard
                        testimonial={testimonial}
                        key={testimonial._id}
                    ></ReviewCard>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
