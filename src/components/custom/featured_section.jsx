import React from 'react'
import FeaturedCard from './featured_card';

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
          {/* scrolling  */}
        <div className="my-8 flex">

          <FeaturedCard/>
        </div>
      </div>
    );
  };

export default FeaturedSection