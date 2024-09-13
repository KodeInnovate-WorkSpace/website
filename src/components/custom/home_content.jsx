import React from "react";
import ImageContainer from "./image_container";

const HomeContent = () => {
  return (
    <div className="bg-gradient-to-t from-mainColor to-secondColor w-full h-[35rem] py-10 flex items-center justify-center">
      <div className="text-white text-center flex flex-col items-center justify-center">
        {/* text content  */}
        <div className="mb-5">
          <h1 className="text-3xl font-bold md:text-6xl">
            Best Locations in India
          </h1>

          <p className="text-md  py-5 md:text-center md:text-xl md:w-[38rem]">
            We are experts in the sector of selling high-end real estate in
            India thanks to our extensive network of high-quality property
            owners.
          </p>
        </div>

        {/* image container */}

        <div className="flex space-x-2 items-center overflow-x-auto md:overflow-hidden">
          <ImageContainer imgSrc={"src/assets/sample1.jpg"} />
          <ImageContainer imgSrc={"src/assets/sample2.jpg"} />
          <ImageContainer imgSrc={"src/assets/sample3.jpg"} />
          <ImageContainer imgSrc={"src/assets/sample4.jpg"} />
          <ImageContainer imgSrc={"src/assets/sample5.jpg"} />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
