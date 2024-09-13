import React from "react";

const ImageContainer = () => {
  return (
    <div className="hidden w-60 h-80 rounded-lg overflow-hidden cursor-pointer md:block transform transition-transform duration-300 ease-out hover:scale-105">
      <img
        src={"https://placehold.co/400"}
        alt="Placeholder"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageContainer;
