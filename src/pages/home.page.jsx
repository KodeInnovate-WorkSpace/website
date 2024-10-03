import { useState, useEffect } from "react";
import Navbar from "@/components/custom/navbar";
import HomeContent from "@/components/custom/home_content";
import Footer from "@/components/custom/footer";
import FAQSection from "@/components/custom/faq_section";
import LocationCircle from "@/components/custom/location_circle";
import FeaturedSection from "@/components/custom/featured_section";
import ScrollToTop from "@/components/custom/scroll_to_top_button";

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

      <main className="pt-[4rem]">
        <div className="px-2 lg:px-10 mt-2">
          <HomeContent />
        </div>

        <div className="px-2 lg:px-10 mt-2">
          <FeaturedSection />
        </div>

        <div
          id="location-circle"
          className="px-2 lg:px-10 mt-2 flex flex-wrap justify-evenly"
        >
          <LocationCircle isVisible={locationCircleInView} />
        </div>

    
        {/* FAQ  */}
        <div className="px-2 py-6 lg:px-10 mt-2">
          <FAQSection />
        </div>
      </main>

      <ScrollToTop/>

      <Footer />
    </div>
  );
};

export default HomePage;
