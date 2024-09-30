import { useState, useEffect } from "react";
import Navbar from "@/components/custom/navbar";
import HomeContent from "@/components/custom/home_content";
import Footer from "@/components/custom/footer";
import HomeGrid from "@/components/custom/home_grid";
import FAQSection from "@/components/custom/faq_section";
import LocationCircle from "@/components/custom/location_circle";

const HomePage = () => {
  const [locationCircleInView, setLocationCircleInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const locationCircleElement = document.getElementById("location-circle");
      const rect = locationCircleElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        setLocationCircleInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Navbar />

      <div className="pt-[4rem]">
        <div className="px-2 lg:px-10 mt-2">
          <HomeContent />
        </div>

        <div
          id="location-circle"
          className="px-2 lg:px-10 mt-2 flex flex-wrap justify-evenly"
        >
          <LocationCircle isVisible={locationCircleInView} />
        </div>

        <div className="px-2 py-6 lg:px-10 mt-2">
          <HomeGrid />
        </div>
        {/* FAQ  */}
        <div className="px-2 py-6 lg:px-10 mt-2">
          <FAQSection />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
