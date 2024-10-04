import { useState, useEffect } from "react";
import Navbar from "@/components/layout/navbar";
import HomeContent from "@/components/page_specific/home/home_content";
import Footer from "@/components/layout/footer";
import FAQSection from "@/components/page_specific/home/faq_section";
import LocationCircle from "@/components/page_specific/home/location_circle";
import FeaturedSection from "@/components/page_specific/home/featured_section";

const HomePage = () => {
  const [locationCircleInView, setLocationCircleInView] = useState(false);

  useEffect(() => {
    //scroll to top on page load
    window.scrollTo(0, 0);

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

      <Footer />
    </div>
  );
};

export default HomePage;
