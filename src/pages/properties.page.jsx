import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import React from "react";
import dummyData from "../constants/data.json";
import { MyCard } from "@/components/custom/card";
import { useLocation } from "react-router-dom";

const PropertiesPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const selectedLocation = query.get("location");

  const locationFilteredData = selectedLocation
    ? dummyData.filter((d) => d.location === selectedLocation)
    : dummyData;

  return (
    <>
      <Navbar />
      <div className="pt-[4rem]">
        {/* new properties  */}
        <div className="px-6">
          <div className="py-4 font-bold text-xl">
            <h1>New Construction</h1>
          </div>

          <div className="flex flex-wrap justify-start gap-x-6 gap-y-6">
            {locationFilteredData.map((property, index) => (
              <MyCard
                key={index}
                id={index + 1}
                img={property.img}
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
        {/* hot properties  */}
        <div className="px-6">
          <div className="py-4 font-bold text-xl">
            <h1>Hot Properties Right Now</h1>
          </div>

          <div className="flex flex-wrap justify-start gap-x-6 gap-y-6">
            {locationFilteredData.map((property, index) => (
              <MyCard
                key={index}
                id={index + 1}
                img={property.img}
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

      <Footer />
    </>
  );
};

export default PropertiesPage;
