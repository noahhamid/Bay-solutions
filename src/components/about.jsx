import { motion } from "framer-motion"; // Import framer-motion
import about_img from "../assets/about_img.jpg";
import rocket from "../assets/icons/green_rocket.svg";
import user from "../assets/icons/user.svg";
import black_arrow from "../assets/icons/arrow-black.svg";
import green_arrow from "../assets/icons/arrow-green.svg";
import customize_img from "../assets/icons/customize.svg";
import Custom from "./custom";
import Faq from "./faq";
import Footer from "./footer";
import { Link } from "react-router-dom"; // Import useLocation hook

const About = () => {
  return (
    <div className="pt-36">
      <div className="bg-[#283F58] py-10 md:px-10 px-5 rounded-2xl text-customTitle gap-4 text-[12px] md:text-[13px] text-center lg:text-left overflow-hidden">
        {/* hero section  */}
        <div className="lg:flex items-center justify-between pb-20">
          <div>
            <h1 className="w-[10px] h-[10px] bg-customGreen rounded-sm inline-block"></h1>
            <h1 className="tracking-wider inline-block px-3 uppercase">
              what we're <span className="text-customGreen">about</span>
            </h1>
            <motion.h1
              className="text-white md:text-[40px] text-[25px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Helping companies <span className="text-customGreen">evolve</span>
            </motion.h1>
            <h1 className="hover:text-customGreen cursor-pointer no-underline">
              <Link
                to="/#pricing"
                className="fadeInButton mt-10 cursor-pointer w-full flex justify-center items-center gap-3 bg-customGreen text-customBlue lg:w-fit capitalize px-10 py-3 rounded-lg text-[15px] tracking-wide hover:text-customGreen hover:bg-customBlue duration-500 group no-underline"
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
              </Link>
            </h1>
          </div>

          {/* hero img */}
          <motion.div
            className="mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={about_img} className="lg:w-[550px] rounded-2xl" />
          </motion.div>
        </div>

        {/* who we are */}
        <div className="lg:flex justify-between border-t border-[#5f6393] pt-10">
          <div>
            <h1 className="text-[30px] uppercase text-white">
              <span className="text-customGreen">how</span> we work
            </h1>
          </div>
          <div className="lg:w-[450px] xl:w-[550px] text-[14px] font-[300] mt-4 md:mt-0">
            <p>
              Join BEY Solution and experience the future of web design and
              development. We craft cutting-edge, high-performance websites that
              seamlessly blend creativity and functionality. Gain access to
              custom-tailored web solutions, modern, responsive designs, and
              expert-driven digital strategies. From intuitive user interfaces
              to sleek, brand-aligned aesthetics, every website we build is
              designed to engage, convert, and grow your business. Our team is
              dedicated to delivering exceptional digital experiences, ensuring
              that your brand stands out in the online world. Whether you’re a
              startup or an established business, we bring your vision to life
              with industry-leading technology and innovation. Elevate your
              online presence with BEY Solution—where creativity meets results.
            </p>
          </div>
        </div>

        {/* get started */}
        <div className="text-white mt-20 text-center">
          <motion.h1
            className="text-[40px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Get started <span className="text-customGreen">now</span>
          </motion.h1>
          <h1 className="text-customTitle">
            Choose any paid plan and get 7-days on us
          </h1>
        </div>

        {/* user plan */}
        <div className="lg:grid grid-cols-3 grid-rows-2 gap-x-3 gap-y-5 space-y-6 lg:space-y-0 text-white mt-10">
          {/* user box */}
          <motion.div
            className="relative bg-customBlue text-center xl:w-[400px] py-16 rounded-tr-2xl rounded-br-2xl custom-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <h1 className="absolute top-0 px-[12px] py-[7px] text-[15px] font-[300] rounded-br-2xl bg-[rgba(65,90,117,0.2)] ">
              Step #1
            </h1>
            <img src={user} className="mx-auto mb-4" />
            <h1 className="text-[25px] font-[500]">
              Select a <span className="text-customGreen">plan</span>
            </h1>
            <h1 className="text-customTitle text-[15px] font-[300]">
              Create your personal account*
            </h1>
            <div className="absolute hidden lg:flex z-10 top-[40%] right-[-36px] rounded-full p-[15px] bg-[rgb(65,90,117)]">
              <img src={green_arrow} className="w-6 " />
            </div>
          </motion.div>

          {/* purchase box */}
          <motion.div
            className="relative bg-customBlue text-center xl:w-[400px] py-16 rounded-tr-2xl rounded-br-2xl custom-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <h1 className="absolute top-0 px-[12px] py-[7px] text-[15px] font-[300] rounded-br-2xl bg-[rgba(65,90,117,0.2)] ">
              Step #2
            </h1>
            <img src={rocket} className="mx-auto mb-4" />
            <h1 className="text-[25px] font-[500]">
              Purchase <span className="text-customGreen">subscription</span>
            </h1>
            <h1 className="text-customTitle text-[15px] font-[300]">
              Securely pay with Tele Birr*
            </h1>
            <div className="absolute hidden lg:flex z-10 top-[40%] right-[-36px] rounded-full p-[15px] bg-[rgb(65,90,117)]">
              <img src={green_arrow} className="w-6" />
            </div>
          </motion.div>

          {/* customize */}
          <motion.div
            className="relative bg-customBlue text-center xl:w-[400px] py-16 rounded-tr-2xl rounded-br-2xl custom-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <h1 className="absolute top-0 px-[12px] py-[7px] text-[15px] font-[300] rounded-br-2xl bg-[rgba(65,90,117,0.2)] ">
              Step #3
            </h1>
            <img src={customize_img} className="mx-auto w-[56px] mb-4" />
            <h1 className="text-[25px] font-[500]">
              Customize your{" "}
              <span className="text-customGreen">preferences</span>
            </h1>
            <h1 className="text-customTitle text-[15px] font-[300]">
              Set up your account for a tailored experience*
            </h1>
          </motion.div>

          {/* ready to go */}
          <motion.div
            className="relative bg-customBlue text-center w-full py-16 rounded-tr-2xl rounded-br-2xl custom-border col-span-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <h1 className="text-[25px] font-[500]">
              Ready to <span className="text-customGreen">go?</span>
            </h1>
            <h1 className="text-customTitle text-[15px] font-[300]">
              Jump right in or give us a shout
            </h1>
            <div className="md:flex justify-center gap-5 px-10">
            <h1 className="hover:text-customGreen cursor-pointer no-underline">
              <Link
                to="/#pricing"
                className="fadeInButton mt-10 cursor-pointer w-full flex justify-center items-center gap-3 bg-customGreen text-customBlue lg:w-fit capitalize px-8 py-3 rounded-lg text-[15px] tracking-wide hover:text-customGreen hover:bg-customBlue duration-500 group no-underline"
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
              </Link>
            </h1>
              <a
                href="/contact"
                className="fadeInButton mt-10 cursor-pointer w-full flex justify-center items-center gap-3 bg-customBlue text-customGreen lg:w-fit capitalize px-5 py-3 rounded-lg text-[15px] tracking-wide hover:text-customBlue hover:bg-customGreen duration-500 group"
              >
                <span>reach out</span>
                <div className="relative w-5 h-5">
                  <img
                    src={green_arrow}
                    className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                  />
                  <img
                    src={black_arrow}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Custom />
      <Faq />
      <Footer />
    </div>
  );
};

export default About;
