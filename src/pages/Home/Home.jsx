import Banner from "../../components/Banner/Banner";
import AllBrands from "../../components/AllBrands/AllBrands";


const Home = () => {
    return (
        <div>
            {/* <h2 className="text-5xl">This is home</h2> */}
            <Banner></Banner>
            <div className="px-5">
                <AllBrands></AllBrands>
            </div>
        </div>
    );
};

export default Home;