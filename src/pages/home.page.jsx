import React from "react";
import Navbar from "@/components/custom/navbar";
import HomeContent from "@/components/custom/home_content";
import Footer from "@/components/custom/footer";
import HomeGrid from "@/components/custom/home_grid";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <div className="pt-[4rem]">
        <div className="px-2 lg:px-10 mt-2">
          <HomeContent />
        </div>
        <div className="px-2 py-6 lg:px-10 mt-2">
          <HomeGrid />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
