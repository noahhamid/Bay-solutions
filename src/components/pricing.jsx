import { useEffect, useState } from "react";
import PricingBox from "./pricingbox";
import cancel from "../assets/icons/cancel.svg";
import checkmark from "../assets/icons/checkmark.svg";
import logo from '../assets/icons/logo_only.png'
import PriceAnimation from "./anime";
import { motion } from "framer-motion"; // Still used for title and box animations

const Pricing = () => {
  const [inView, setInView] = useState(false); // State to track visibility

  const handleScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect(); // Stop observing once it's in view
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      rootMargin: "0px",
      threshold: 0.1,
    });

    const target = document.querySelector("#pricing-section");
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="pricing-section" className="overflow-hidden">
      {/* Title Animation */}
      <h1 className="text-white text-center text-[30px] md:text-[30px] lg:text-[40px]">
        {inView &&
          "Pick the best".split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.02 }}
            >
              {letter}
            </motion.span>
          ))}
        <span className="text-customGreen">
          {inView &&
            " plan".split("").map((letter, index) => (
              <motion.span
                key={index + 10}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (index + 10) * 0.02 }}
              >
                {letter}
              </motion.span>
            ))}
        </span>
      </h1>

      {/* Paragraph Animation (Using CSS) */}
      <p
        className={`text-center text-customTitle text-[13px] transition-opacity duration-1000 ${
          inView ? "fade-in-up" : "opacity-0 translate-y-5"
        }`}
      >
        Choose the right plan for your business website.
      </p>

      <div className="flex flex-col lg:flex-row lg:flex-wrap xl:flex-nowrap gap-2 lg:gap-20 xl:gap-2 justify-center mx-5">
        <motion.div
          className="lg:w-[320px] flex flex-col md:flex-row lg:flex-col md:items-start px-10 justify-between bg-customGreen rounded-xl py-10 mt-10 border"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-customBlue w-[70px] rounded-lg p-3">
            <img src={logo} className="" />
          </div>
          <div className="text-white text-[45px] md:text-[50px] font-[400] space-y-[-25px] capitalize">
            <h1>Evolve.</h1>
            <h1>Innovate.</h1>
            <h1>Achieve.</h1>
          </div>
          <PriceAnimation />
        </motion.div>

        <PricingBox
          mode="Basic"
          price1="24,899 birr"
          price2="18,899 birr"
          text1="Static website"
          text2="Responsive Design"
          text3="Up to 4 Pages"
          text4="Annual Hosting"
          text5="24/7 on-call support"
          className={"flex capitalize text-[14px] text-[#a19f9f]"}
          img={cancel}
          text6=" Basic SEO Optimization "
          disc="Everything you need to get started with a website."
          text7="API Integrations"
        />
        <PricingBox
          mode="Standard"
          price1="32,899 birr"
          price2="26,899 birr"
          text1="Static website"
          text2="Custom Design"
          text3="Up to 8 Pages"
          text4="Annual Hosting"
          text5="24/7 on-call support"
          className={"flex capitalize text-[14px] text-[#a19f9f]"}
          img={cancel}
          text6="Intermediate SEO Optimization "
          disc="Giving you a flexible website for your business."
          text7="API Integrations"
        />
        <PricingBox
          mode="premium"
          price1="51,899 birr"
          price2="45,899 birr"
          text1="Dynamic website"
          text2="Fully Custom Design"
          text3="Unlimited Pages"
          text4="Annual Hosting"
          className={"flex capitalize text-[14px] text-white"}
          img={checkmark}
          text5="24/7 on-call support"
          disc="Meeting all your needs on your online presence."
          text6="Advanced SEO Optimization "
          text7="API Integrations"
        />
      </div>
    </div>
  );
};

export default Pricing;
