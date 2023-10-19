import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Banner = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative">
                        <img
                            className="w-full object-cover"
                            src="https://i.postimg.cc/G2VkrTYF/top-view-set-gadgets-purple-neon-light-blue-min.jpg"
                            alt=""
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <h2 className="text-white text-4xl font-bold">
                                Your Gateway to Cutting-Edge Technology.
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img
                            className="w-full object-cover"
                            src="https://i.postimg.cc/Hs3NJb5d/top-view-set-gadgets-purple-neon-light-pink-min.jpg"
                            alt=""
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <h2 className="text-white text-4xl font-bold">
                                Infinite Choices, One Mash Tech.
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img
                            className="w-full object-cover"
                            src="https://i.postimg.cc/fRLrYkjX/still-life-books-versus-technology-min.jpg"
                            alt=""
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <h2 className="text-white text-4xl font-bold">
                                Elevate Your Experience with Mash Tech.
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
