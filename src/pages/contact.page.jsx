import ContactForm from "@/components/custom/contact_form";
import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import { Label } from "@/components/ui/label";
import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[6rem] px-4 md:px-8">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Contact Our Team</h1>
          <p className="text-lg">
            Got any questions about our service? We're here to help.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-6 ">
          {/* Left: Form */}
          <div className="flex-1 p-6 flex justify-end lg:py-6">
            <div className="w-full max-w-md">
              <ContactForm />
            </div>
          </div>

          {/* Right: Contact Details */}
          <div className="flex-1 p-6 space-y-6 flex justify-start bg-mainColor text-white rounded-3xl">
            <div className="w-full max-w-md space-y-6">
              {/* Call Section */}
              <div>
                <h1 className="text-2xl font-bold">Call Us</h1>
                <Label>Call our team for your queries</Label>
                <h2>+91 8291492129</h2>
              </div>

              {/* Address Section */}
              <div>
                <h1 className="text-2xl font-bold">Visit Us</h1>
                <Label>Chat to us in person</Label>
                <h2>Kalyan Phata Near HP Petrol Pump</h2>
              </div>

              {/* Social Media Section */}
              <div>
                <h1 className="text-2xl font-bold">Socials</h1>
                <Label>Follow us on social media</Label>
                <ul className="flex space-x-4 mt-2">
                  <li className="transform transition-transform duration-300 hover:-translate-y-1">
                    <Link>
                      <FaXTwitter className="text-2xl" />
                    </Link>
                  </li>
                  <li className="transform transition-transform duration-300 hover:-translate-y-1">
                    <Link>
                      <SlSocialYoutube className="text-2xl" />
                    </Link>
                  </li>
                  <li className="transform transition-transform duration-300 hover:-translate-y-1">
                    <Link>
                      <FaInstagram className="text-2xl" />
                    </Link>
                  </li>
                  <li className="transform transition-transform duration-300 hover:-translate-y-1">
                    <Link>
                      <FaFacebook className="text-2xl" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
