import { motion } from "framer-motion"; // Importing Framer Motion
import black_arrow from "../assets/icons/arrow-black.svg";
import green_arrow from "../assets/icons/arrow-green.svg";
import LandingAnimation from "./landing_anime";

const lines = [
  ["Your ", "Vision", ", Our ", "Code"],
  ["Let’s Build Something ", "Great"],
];

const AnimatedText = ({ text, delayIndex }) => {
  return (
    <div className="inline-block">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className={char === " " ? "inline-block w-2" : ""}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: (delayIndex + index) * 0.03,
            duration: 0.5,
            ease: "ease-out",
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center py-10 text-center lg:text-left mx-5 pt-20 lg:pt-[250px] md:mx-0 lg:px-5">
      <div className="flex flex-col gap-5 lg:gap-2 lg:w-[45%]">
        {/* Quote Animation (Framer Motion) */}
        <div className="capitalize text-white text-[30px] xl:text-[40px]">
          {lines.map((line, lineIndex) => (
            <motion.h1
              key={lineIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3, // Reduced to make the quote appear faster
                delay: lineIndex * 0.2, // Adjusted delay for quicker sequencing
                ease: "ease-out", // Smooth but faster animation
              }}
            >
              {line.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={
                    word.includes("Vision") ||
                    word.includes("Code") ||
                    word.includes("Great")
                      ? "text-customGreen"
                      : ""
                  }
                >
                  <AnimatedText
                    text={word}
                    delayIndex={lineIndex * 10 + wordIndex * 5}
                  />
                </span>
              ))}
            </motion.h1>
          ))}
        </div>

        {/* Description Animation (CSS for smooth effect) */}
        <div className="text-customTitle text-[13px] lg:text-[15px]">
          <span className="fadeInUp ">
            Innovative, scalable, and user-focused web solutions designed to
            help
          </span>
          <span className="fadeInUpSecond ">
            businesses and individuals thrive in the digital world.
          </span>
        </div>

        <div className=" lg:hidden">
          <LandingAnimation />
        </div>
        {/* Button Animation (CSS for smooth effect) */}
        <a
          href="#pricing"
          className="fadeInButton mt-10 cursor-pointer w-full flex items-center gap-3 bg-customGreen text-customBlue lg:w-fit capitalize px-10 py-3 rounded-lg text-[15px] tracking-wide hover:text-customGreen hover:bg-customBlue duration-500 group"
        >
          <span>Get Started</span>
          <div className="relative w-5 h-5">
            <img
              src={black_arrow}
              className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500"
            />
            <img
              src={green_arrow}
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </a>
      </div>

      {/* Hero Image */}

      <div className=" hidden  lg:flex">
        <LandingAnimation />
      </div>
    </div>
  );
};

export default Hero;
