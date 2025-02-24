import logo from "../assets/icons/logo.png";
import { Link, useLocation } from "react-router-dom"; // Import useLocation hook

const Footer = () => {
  return (
    <div className="bg-[#102031] py-10 rounded-2xl px-4 md:px-10 mt-20 text-center lg:text-left">
      <div className="flex flex-col lg:flex-row lg:space-x-20 justify-between  ">
        <div>
          <img src={logo} className="w-[250px] mx-auto lg:mx-0" />

          <p className="lg:w-[400px] md:w-[300px] mx-auto lg:mx-0 text-customTitle text-[14px] mt-5">
            We create customized websites designed to drive success, engagement,
            and growth.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-20 mt-10">
          <div>
            <h1 className="text-[#524a69] font-[500] capitalize">about </h1>
            <ul className="text-white  text-[13px] space-y-3 mt-5">
              <li className="hover:text-customGreen cursor-pointer">
                <Link to="/#home">Home</Link>
              </li>
              <li className="hover:text-customGreen cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-customGreen cursor-pointer">
                <Link to="/#service">service</Link>{" "}
            
              </li>
              <li className="hover:text-customGreen cursor-pointer">
                <Link to="/#pricing">Pricing</Link>{" "}
                {/* This will navigate to #pricing on homepage */}
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[#524a69] font-[500] capitalize">Services </h1>
            <ul className="text-white text-[13px] space-y-3 mt-5">
              <li>Branding & Business website</li>
              <li>Consulting</li>
              <li>Seo & Managment</li>
              <li>System development</li>
            </ul>
          </div>
          <div>
            <h1 className="text-[#524a69] font-[500] capitalize">contact </h1>
            <ul className="text-white text-[13px] space-y-3 mt-5">
              <li>agencybey@gmail.com </li>
              <li>beysolutions.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-[#291d47] border mt-20"></div>
      <h1 className="mt-10 text text-[#524a69]">
        &copy; {new Date().getFullYear()}Bey solutions . All rights reserved.{" "}
      </h1>
    </div>
  );
};

export default Footer;
