import React from "react";

const ImageContainer = () => {
  return (
    <div className=" hidden w-60 h-80 rounded-lg overflow-hidden cursor-pointer md:block hover:h-[21rem] transition-all duration-100 ease-linear">
      <img
        src={"https://placehold.co/400"}
        alt="Placeholder"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageContainer;
