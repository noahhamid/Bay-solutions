import { motion } from "framer-motion";
import AboutAnimation from "./anime";
import Button from "./button";
import logo from "../assets/icons/logo_only.png";

const Custom = () => {
  const titleText = "Evolve. Innovate. Achieve.";
  const letters = titleText.split("");

  return (
    <div className=" flex flex-col md:flex-row md:items-start px-10 justify-between mx-5 md:mx-0 bg-customGreen rounded-xl py-10 mt-10 borde">
      
      <div className="text-white mb-10 md:mb-0">
      <div className="bg-customBlue w-[70px] rounded-lg p-3">
        <img src={logo} className="" />
      </div>
        <h1 className="md:text-[50px] text-[30px] font-[400] capitalize">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.1, // Delay the animation for each letter
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
          viewport={{ once: true }} // Trigger only once when in view
        >
          <Button
            text="Get started"
            className="text-[15px] bg-white text-customBlue px-10 py-2 rounded-md 
            hover:bg-customBlue hover:text-white transition-colors duration-500 ease-in-out"
          />
        </motion.div>
      </div>
      <AboutAnimation />
    </div>
  );
};

export default Custom;
