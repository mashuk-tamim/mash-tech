import Banner from "../../components/Banner/Banner";
import AllBrands from "../../components/AllBrands/AllBrands";
import Testimonial from "../../components/Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            {/* <h2 className="text-5xl">This is home</h2> */}
            <Banner></Banner>
            <div className="px-5">
                <AllBrands></AllBrands>
            </div>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;