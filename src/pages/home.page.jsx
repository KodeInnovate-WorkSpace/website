import React from "react";
import dummyData from "../constants/data.json";
import Navbar from "@/components/custom/navbar";
import { MyCard } from "@/components/custom/card";
import HomeContent from "@/components/custom/home_content";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <div className="pt-[4rem]">
        <HomeContent />

        <div className="px-6">
          {/* title */}

          <div className="py-4 font-bold text-xl">
            <h1>New Construction</h1>
          </div>

          <div className="flex flex-wrap justify-between gap-4">
            {dummyData.map((property, index) => (
              <MyCard
                key={index}
                price={property.price}
                location={property.location}
                name={property.name}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                size={property.size}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
