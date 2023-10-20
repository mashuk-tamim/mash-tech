import { useEffect, useState } from "react";
// import { useContext } from "react";
// import { ThemeContext } from "../../providers/ThemeProvider";
import ReviewCard from "../../pages/ReviewCard/ReviewCard";

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    // const { isDark } = useContext(ThemeContext);

    useEffect(() => {
        fetch("http://localhost:5000/testimonials")
            .then((res) => res.json())
            .then((data) => {
                setTestimonials(data);
            });
    }, []);
    return (
        <div className="bg-[#ffcccb4e] p-5 md:p-10">
            <h2 className="text-4xl font-bold text-center pb-5 border-gray-500 mx-auto py-16 mb-10 md:mb-20">
                Testimonial
            </h2>
            <div className="">
                {testimonials?.map((testimonial) => (
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
