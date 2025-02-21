import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Offer_anime from "./offer_anime";
import Offer_box from "./offer_box";

const Offer = () => {
  const [inView, setInView] = useState(false); // To track if the page is in view

  const handleScroll = () => {
    const offerBoxes = document.querySelectorAll(".offer-box");
    offerBoxes.forEach((box) => {
      const rect = box.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        if (box.classList.contains("right")) {
          box.classList.add("offer-box-animation-right");
        } else if (box.classList.contains("left")) {
          box.classList.add("offer-box-animation-left");
        }
      }
    });

    // Trigger animation when the page is in view (or any other element on the page)
    const pageElement = document.querySelector("#service-page");
    const rect = pageElement.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const titleText1 = "Services We ";
  const titleText2 = "Offer";

  return (
    <div id="service-page">
      <div className="mt-20 lg:mb-[200px] text-center text-white text-[20px] md:text-[30px] lg:text-[40px] capitalize">
        {/* Animate each letter of "Services We Offer" when the page is in view */}
        {inView && (
          <>
            <motion.h1>
              {titleText1.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }} // Faster delay for quicker animation
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.h1>
              {titleText2.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: (titleText1.length + index) * 0.05 }} // Adjusted delay for the second word
                  className="text-customGreen" // Add custom green color here
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
          </>
        )}
      </div>

      <div className="relative">
        <div className="hidden lg:block">
          <Offer_anime />
        </div>
        <Offer_box
          className="offer-box right-[60%] -top-[500px] right "
          title="Website Design & Development"
          text="We create custom, responsive websites tailored to your brand’s needs, ensuring your online presence is not only beautiful but also functional, with seamless mobile and desktop experiences."
        />
        <Offer_box
          className="offer-box right-[70%] right "
          title="SEO & Digital Marketing"
          text="Our team employs effective SEO strategies to increase organic traffic, improve search engine rankings, and leverage content marketing and PPC campaigns to enhance your online visibility."
        />
        <Offer_box
          className="offer-box right-[60%] -bottom-[500px] right "
          title="Website Maintenance & Support"
          text="We provide ongoing website maintenance, quick bug fixes, and performance optimization to ensure your website remains secure, fresh, and performs smoothly at all times."
        />
          <div className=" lg:hidden" >
          <Offer_anime />
        </div>
        <Offer_box
          className="offer-box left-[60%] -top-[500px] left "
          title="Branding & UX/UI Design"
          text="We craft unique brand identities through custom logos and design user-friendly, visually appealing interfaces that create intuitive, engaging experiences for your website visitors."
        />
        <Offer_box
          className="offer-box left-[70%] left "
          title="Web Hosting & Domain Services"
          text="We offer secure, fast hosting and reliable domain registration services to ensure your website operates flawlessly, with high uptime and a seamless user experience."
        />
        <Offer_box
          className="offer-box left-[60%] -bottom-[500px] left "
          title="Analytics & Conversion Optimization"
          text="We analyze website traffic and user behavior, optimizing key elements like CTAs and forms to increase conversions and turn visitors into long-term customers."
        />
      </div>
    </div>
  );
};

export default Offer;
