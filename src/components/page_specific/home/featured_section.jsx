import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import data from "../../../constants/data.json";
import "swiper/css";
import "swiper/css/navigation";
import useWhatsApp from "@/hooks/useWhatsApp";

const FeaturedSection = () => {
    const handleClick = (property) => {
        const message = `I want further details about *${property.name.trim()}*, which is listed as *${
            property.tag
        }* property`;

        const sendMessage = useWhatsApp(message);

        sendMessage();
    };

    return (
        <div className="container mx-auto flex flex-col items-center justify-center overflow-hidden py-5">
            <div>
                <h1 className="text-center font-bold text-gray-800 text-xl lg:text-2xl">
                    Featured Properties
                </h1>
                <h3 className="text-center font-semibold text-gray-700 lg:text-xl">
                    To get more information, please click on the images below.
                </h3>
            </div>

            <div className="my-8 w-full">
                <Swiper
                    slidesPerView={1}
                    centeredSlides={true} // Center the active slide
                    spaceBetween={20} // Space between slides
                    modules={[Navigation]}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10, // Adjust space for mobile
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20, // Adjust space for tablet
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30, // Adjust space for desktop
                            centeredSlides: false,
                        },
                    }}
                >
                    {data.map((d) =>
                        d.featured ? (
                            <SwiperSlide key={d.id}>
                                <div
                                    className="w-64 h-72 rounded-lg flex flex-col justify-between items-start p-4 mx-auto"
                                    style={{
                                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${d.img})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                    onClick={() => handleClick(d)}
                                >
                                    <div className="bg-slate-700 text-white px-2 text-sm rounded-sm">
                                        <p>{d.tag}</p>
                                    </div>

                                    <div>
                                        <h1 className="text-white">{d.name}</h1>
                                        <p className="text-white">Beds: {d.bedrooms}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ) : null
                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default FeaturedSection;
