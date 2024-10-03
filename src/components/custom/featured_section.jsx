import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import data from "../../constants/data.json";
import "swiper/css";
import "swiper/css/navigation";

const FeaturedSection = () => {
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

      <div className="my-8 w-full ">
        <Swiper
          slidesPerView={1}
          modules={[Navigation]}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((d) =>
            d.featured ? (
              <SwiperSlide key={d.id}>
                <div
                  className="w-64 h-72 rounded-lg flex flex-col justify-between items-start p-4 mx-2"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${d.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
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
