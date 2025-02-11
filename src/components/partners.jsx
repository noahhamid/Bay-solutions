import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import layodacha from "../assets/layodacha.png";
import pivot from "../assets/pivot.png";
import bukuabal from "../assets/bukuabal.png";
import naifty from "../assets/naifty.png";

const Partners = () => {
  const [inView, setInView] = useState(false); // Track if the section is in view

  const handleScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setInView(true); // Set to true when the element is in view
        observer.disconnect(); // Stop observing after triggering animation
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is in view
    });

    const target = document.querySelector("#partners-section");
    if (target) {
      observer.observe(target);
    }

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  const titleText = "Trusted by 10+ ";
  const highlightedText = "Leading Companies";

  return (
    <div id="partners-section" className="text-center lg:mt-[250px] text-white relative">
      <div className="my-24 border-t border-[#3a4471]"></div>

      {/* Title Animation */}
      <h1 className="text-[20px] md:text-[30px] lg:text-[40px]">
        {inView && (
          <>
            {/* First part of the title */}
            {titleText.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.02 }} // Reduced delay for faster animation
              >
                {letter}
              </motion.span>
            ))}
            
            {/* Highlighted part with custom green color */}
            {highlightedText.split("").map((letter, index) => (
              <motion.span
                key={index + titleText.length} // Offset index for uniqueness
                className="text-customGreen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (index + titleText.length) * 0.02 }} // Reduced delay for faster animation
              >
                {letter}
              </motion.span>
            ))}
          </>
        )}
      </h1>

      {/* Description Animation from Bottom */}
      <motion.p
        className="lg:w-[500px] text-[13px] mx-auto mt-3 text-customTitle"
        initial={{ opacity: 0, y: 50 }} // Start from bottom with opacity 0
        animate={{
          opacity: inView ? 1 : 0, // Fade in when in view
          y: inView ? 0 : 50, // Move up when in view
        }}
        transition={{ delay: 0.3, duration: 1 }} // Delay and duration for smooth transition
      >
        Join us on this transformative journey. Let us empower your business,
        elevate your online presence, and unlock your true digital potential.
        Together, we will make a profound impact on Ethiopia, one website at a
        time.
      </motion.p>

      {/* Fading Effect Overlay */}
      <div className="relative overflow-hidden w-full mt-10">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#2e274a] to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#2e274a] to-transparent z-10"></div>

        {/* Sliding Logos */}
        <div className="flex items-center gap-20 md:gap-40 animate-scroll">
          <img src={pivot} className="md:h-10 h-6 w-auto " />
          <img src={layodacha} className="md:h-10 h-6 w-auto" />
          <img src={naifty} className="md:h-10 h-6 w-auto" />
          <img src={bukuabal} className="md:h-10 h-6 w-auto" />
          {/* Duplicating images for smooth infinite scrolling */}
          <img src={pivot} className="md:h-10 h-6 w-auto" />
          <img src={layodacha} className="md:h-10 h-6 w-auto" />
          <img src={naifty} className="md:h-10 h-6 w-auto" />
          <img src={bukuabal} className="md:h-10 h-6 w-auto" />
        </div>
      </div>
      <div className="my-24 border-t border-[#3a4471]"></div>
    </div>
  );
};

export default Partners;
