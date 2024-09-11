import React from "react";
import dummyData from "../constants/data.json";
import Navbar from "@/components/custom/navbar";
import { MyCard } from "@/components/custom/card";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
};

export default HomePage;
