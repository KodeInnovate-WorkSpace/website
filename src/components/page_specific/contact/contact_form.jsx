import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCursor } from "@/context/cursor.context";
import React from "react";

const ContactForm = () => {
  const { blendMouseEnter, mouseLeave } = useCursor();

  return (
    <>
      <>
        <Form>
          <form className="w-full md:w-2/3 space-y-6">
            {/* First Name & Last Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fname">First Name</Label>
                <Input type="text" id="fname" placeholder="First Name" />
              </div>

              <div>
                <Label htmlFor="lname">Last Name</Label>
                <Input type="text" id="lname" placeholder="Last Name" />
              </div>
            </div>

            {/* Email (Full Width) */}
            <div className="w-full">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full"
              />
            </div>

            {/* Message Textarea */}
            <div className="w-full">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your message..."
                className="w-full p-2 border rounded-lg"
              />
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                onMouseEnter={blendMouseEnter}
                onMouseLeave={mouseLeave}
                className="bg-mainColor w-full hover:bg-secondColor h-12 text-md lg:text-xl"
              >
                Send Message
              </Button>
            </div>
          </form>
        </Form>
      </>
    </>
  );
};

export default ContactForm;
