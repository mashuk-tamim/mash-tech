import { useEffect, useState } from "react";
import UpcomingCard from "../../pages/UpcomingCard/UpcomingCard";

const UpComing = () => {
    const [upcoming, setUpcoming] = useState([]);
    useEffect(() => {
        fetch("https://mash-tech-server.vercel.app/upcoming")
            .then((res) => res.json())
            .then((data) => {
                setUpcoming(data);
            });
    }, []);
    return (
        <div className="px-5 mb-10">
            <h2 className="text-4xl font-bold text-center pb-5 my-20 mx-auto">
                Upcoming Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {upcoming?.map((upcomingProduct) => (
                    <UpcomingCard
                        upcomingProduct={upcomingProduct}
                        key={upcomingProduct._id}
                    ></UpcomingCard>
                ))}
            </div>
        </div>
    );
};

export default UpComing;
