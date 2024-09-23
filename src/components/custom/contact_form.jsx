import React from "react";
import { Form } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

const ContactForm = () => {
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
              <Button type="submit" className="bg-mainColor w-full">
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
