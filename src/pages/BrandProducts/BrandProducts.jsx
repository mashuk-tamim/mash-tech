import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCards from "../ProductCards/ProductCards";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const BrandProducts = () => {
    const [loading, setLoading] = useState(true);
    const [brands, setBrands] = useState([]);
    const [products, setProducts] = useState([]);

    const { id } = useParams();
    // console.log(brands, id);
    useEffect(() => {
        fetch("https://mash-tech-server.vercel.app/brands")
            .then((res) => res.json())
            .then((data) => {
                setBrands(data);
            });
    }, []);
    const brand = brands.find((brand) => brand?._id === id);
    console.log(brand);
    const {bannerOne, bannerTwo, bannerThree} = brand || {};


    useEffect(() => {
        fetch("https://mash-tech-server.vercel.app/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                console.log(data);
            });
    }, []);
    console.log(products)
    // useEffect(() => {
    //     fetch(`https://mash-tech-server.vercel.app/products/${brand?.name}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setProducts(data);
    //             console.log(data);
    //         });
    // }, [brand]);
    // console.log(products)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 1000);
        // Clean up the timeout to prevent memory leaks
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    
    const matchedProducts = products?.filter(
        (product) => product?.brand === brand?.name
    );
    console.log(matchedProducts);
    if (!matchedProducts.length) {
        var noData = true;
    }
    // console.log(noData);

    return (
        <div className="mt-10 mb-20">
            {/* <h2>All Products: {products?.length}</h2> */}
            <p className="text-4xl font-bold text-center py-5">{brand?.name}</p>
            <Swiper
                slidesPerView={1}
                loop={true}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative">
                        <img
                            className="w-full md:h-[400px] lg:h-[500px] object-cover"
                            src={bannerOne}
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img
                            className="w-full md:h-[400px] lg:h-[500px] object-cover"
                            src={bannerTwo}
                            alt=""
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img
                            className="w-full md:h-[400px] lg:h-[500px] object-cover"
                            src={bannerThree}
                            alt=""
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
            {loading ? (
                <div className="text-center">
                    <p className="loading loading-infinity loading-lg"></p>
                </div>
            ) : (
                <>
                    {noData && (
                        <>
                            <p className="text-2xl font-semibold text-center my-10">
                                Opps<span className="text-red-600">!</span>
                            </p>
                            <img
                                className="w-1/2 mx-auto rounded-xl"
                                src="https://i.postimg.cc/gJQJvmBx/no-data-found.png"
                                alt=""
                            />
                        </>
                    )}
                </>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 h-auto mt-10">
                {matchedProducts?.map((matchedProduct) => (
                    <ProductCards
                        matchedProduct={matchedProduct}
                        key={matchedProduct._id}
                    ></ProductCards>
                ))}
            </div>
        </div>
    );
};

export default BrandProducts;
