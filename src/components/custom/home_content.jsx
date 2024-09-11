import React from "react";

const HomeContent = () => {
  return (
    <div className="bg-gradient-to-t from-[#7C4BD2] to-[#5f2db5] w-full h-[30rem] py-10 flex items-center justify-center">
      <div className="text-white text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold md:text-6xl">
          Best Locations in India
        </h1>

        <p className="text-md  py-5 md:text-center md:text-xl md:w-[38rem]">
          We are experts in the sector of selling high-end real estate in India
          thanks to our extensive network of high-quality property owners.
        </p>

        {/* image container */}

        <div className="flex space-x-2 items-center">
          <div className=" hidden w-60 h-80 rounded-lg overflow-hidden md:block hover:h-[24rem] transition-all duration-100 ease-linear">
            <img
              src={"https://placehold.co/400"}
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          </div>

          <div className=" hidden w-60 h-80 rounded-lg overflow-hidden md:block hover:h-[24rem] transition-all duration-100 ease-linear">
            <img
              src={"https://placehold.co/400"}
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          </div>
          {/* middle one */}
          <div className=" hidden w-60 h-80 rounded-lg overflow-hidden md:block hover:h-[24rem] transition-all duration-100 ease-linear">
            <img
              src={"https://placehold.co/400"}
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          </div>

          <div className=" hidden w-60 h-80 rounded-lg overflow-hidden md:block hover:h-[24rem] transition-all duration-100 ease-linear">
            <img
              src={"https://placehold.co/400"}
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          </div>

          <div className=" hidden w-60 h-80 rounded-lg overflow-hidden md:block hover:h-[24rem] transition-all duration-100 ease-linear">
            <img
              src={"https://placehold.co/400"}
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
