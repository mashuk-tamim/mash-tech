import Brands from "../../components/Brands/Brands";


const Home = () => {
    return (
        <div>
            <h2 className="text-5xl">This is home</h2>
            <div className="px-5">
                <Brands></Brands>
            </div>
        </div>
    );
};

export default Home;