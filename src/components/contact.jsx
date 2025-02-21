import React from "react";
import { motion } from "framer-motion";
import Footer from "./footer";

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }, // Faster stagger time
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } }, // Faster duration
  };

  // Helper function to split text into individual letters and preserve spaces
  const splitText = (text) => {
    return text.split("").map((char, index) => {
      if (char === " ") {
        return (
          <span key={index} className="inline-block">
            &nbsp;
          </span>
        ); // Keep space intact
      } else {
        return (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
          >
            {char}
          </motion.span>
        );
      }
    });
  };

  return (
    <div>
      <div className="pt-[150px] flex flex-col lg:flex-row justify-between lg:px-10">
        <div className="space-y-4 lg:mt-10 px-5">
          <div className="flex items-center text-customTitle gap-4 uppercase text-[12px] md:text-[14px]">
            <h1 className="w-[10px] h-[10px] bg-customGreen rounded-sm"></h1>
            <h1>contacts</h1>
          </div>

          {/* Animate the text "Got something to tell us?" */}
          <motion.h1
            className="text-white text-[30px] md:text-[35px] lg:text-[40px]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {splitText("Got something to")}
            <span className="text-customGreen block">
              {splitText("tell us?")}
            </span>
          </motion.h1>

          <motion.h1
            className="text-[13px] lg:text-[15px] text-customTitle"
            variants={{
              hidden: { opacity: 0, y: 50 }, // Start below the normal position and invisible
              visible: {
                opacity: 1,
                y: 0, // Move to the normal position
                transition: { duration: 0.5, delay: 1 }, // Adjust duration for the animation
              },
            }}
            initial="hidden"
            animate="visible"
          >
            Why not send us a message? We're always here to help.
          </motion.h1>
        </div>

        {/* Form container with slide-in from the right */}
        <motion.div
          className="bg-[#283F58] lg:w-[550px] mt-10 lg:mt-0 px-7 py-10 rounded-2xl"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <form>
            <motion.h1
              className="text-white text-[30px] mb-5"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              Contact <span className="text-customGreen">us</span>
            </motion.h1>
            <div className="mb-4">
              <label htmlFor="email" className="text-customTitle block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 mt-2 text-[14px] bg-customBlue text-white border-none rounded-lg focus:outline-none focus:border-customGreen focus:ring-1 focus:ring-customGreen duration-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="name" className="text-customTitle block text-sm font-medium">
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
              <label htmlFor="message" className="text-customTitle block text-sm font-medium">
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
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
