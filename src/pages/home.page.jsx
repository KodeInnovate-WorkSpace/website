import React from "react";
import dummyData from "../constants/data.json";
import Navbar from "@/components/custom/navbar";
import { MyCard } from "@/components/custom/card";
import HomeContent from "@/components/custom/home_content";
import Footer from "@/components/custom/footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <div className="pt-[4rem]">
        <div className="px-2 lg:px-10 mt-2">
          <HomeContent />
        </div>

        <div className="px-6">
          {/* title */}

          <div className="py-4 font-bold text-xl">
            <h1>New Construction</h1>
          </div>

          <div className="flex flex-wrap justify-start gap-x-6 gap-y-6">
            {dummyData.map((property, index) => (
              <MyCard
                key={index}
                id={index + 1}
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
    </div>
  );
};

export default HomePage;
