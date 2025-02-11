// src/components/contact.js
import React from "react";
import Footer from "./footer";

const Contact = () => {
  return (
    <div>
      <div className="pt-[150px] flex flex-col lg:flex-row justify-between  lg:px-10">
        <div className="space-y-4 lg:mt-10 px-5">
          <div className="flex items-center text-customTitle gap-4 uppercase text-[12px] md:text-[14px]">
            <h1 className="w-[10px] h-[10px] bg-customGreen rounded-sm"></h1>
            <h1>contacts</h1>
          </div>
          <h1 className="text-white text-[30px] md:text-[35px] lg:text-[40px]">
            Got something to
            <span className="text-customGreen block">tell us?</span>
          </h1>
          <h1 className="text-[13px] lg:text-[15px] text-customTitle">
            Why not send us a message? We're always here to help.
          </h1>
        </div>
        <div className="bg-[#283F58] lg:w-[550px] mt-10 lg:mt-0 px-7 py-10 rounded-2xl">
          <form>
            <h1 className="text-white text-[30px] mb-5">
              Contact <span className="text-customGreen">us</span>
            </h1>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 mt-2 text-[14px] bg-customBlue text-customTitle border-none rounded-lg focus:outline-none focus:border-customGreen focus:ring-1 focus:ring-customGreen duration-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 mt-2 bg-customBlue text-[14px] text-customTitle border-none rounded-lg focus:outline-none focus:border-customGreen focus:ring-1 focus:ring-customGreen duration-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message"
                rows="5"
                className="w-full px-4 py-2 mt-2 text-[14px] bg-customBlue text-customTitle border-none rounded-lg focus:outline-none focus:border-customGreen focus:ring-1 focus:ring-customGreen duration-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-customGreen text-customBlue rounded-lg hover:bg-customBlue hover:text-customGreen duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
