import React from "react";
import ImageContainer from "./image_container";

const HomeContent = () => {
  return (
    <div className="bg-gradient-to-t from-[#7C4BD2] to-[#5f2db5] w-full h-[33rem] py-10 flex items-center justify-center">
      <div className="text-white text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold md:text-6xl">
          Best Locations in India
        </h1>

        <p className="text-md  py-5 md:text-center md:text-xl md:w-[38rem]">
          We are experts in the sector of selling high-end real estate in India
          thanks to our extensive network of high-quality property owners.
        </p>

        {/* image container */}

        <div className="flex space-x-2 items-center">



          <ImageContainer />
          <ImageContainer />
          <ImageContainer />
          <ImageContainer />
          <ImageContainer />


        </div>
      </div>
    </div>
  );
};

export default HomeContent;
