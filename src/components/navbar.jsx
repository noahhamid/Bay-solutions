import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation hook
import logo from "../assets/icons/logo.png";
import logo_only from "../assets/icons/logo_only.png";
import contact_black from "../assets/icons/contact-black.svg";
import contact_green from "../assets/icons/contact-green.svg";
import cancel from "../assets/icons/x.svg";
import menu from "../assets/icons/menu.svg";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section when the route changes
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]); // Run effect when the route changes

  // Function to handle scroll to top for specific sections
  const handleScrollToTop = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      {/* Desktop Navigation */}
      <div
        className={`hidden lg:flex fade-in-from-top fixed right-0 left-0 justify-between items-center py-1 border-t border-b border-[#21374F] transition-all duration-500 ${
          isScrolled
            ? "top-0 z-20 bg-[#1d1e39] px-24 py-2 border-none"
            : "top-4 mx-24"
        }`}
      >
        <img src={logo} className="w-48" />
        <nav>
          <ul className="flex text-white gap-14 capitalize text-[13px]">
            <li className="hover:text-customGreen cursor-pointer">
              <Link to="/#home" onClick={() => handleScrollToTop("home")}>
                Home
              </Link>
            </li>
            <li className="hover:text-customGreen cursor-pointer">
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className="hover:text-customGreen cursor-pointer">
              <Link to="/#service" onClick={() => handleScrollToTop("service")}>
                Service
              </Link>
            </li>
            <li className="hover:text-customGreen cursor-pointer">
              <Link to="/#pricing" onClick={() => handleScrollToTop("pricing")}>
                Pricing
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="/contact">
          <div
            onClick={() => setIsMenuOpen(false)}
            className="bg-customGreen relative flex px-2 py-[10px] rounded-lg gap-3 cursor-pointer hover:bg-customBlue duration-500 text-customBlue uppercase text-[13px] hover:text-customGreen group"
          >
            <div className="relative w-5 h-5">
              <img
                src={contact_black}
                className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500"
              />
              <img
                src={contact_green}
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <h1>Contact</h1>
          </div>
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="top-0 px-5 py-3 flex lg:hidden items-center justify-between fixed w-full left-0 z-50 bg-[#1d1e39]">
        <div>
          <img src={logo_only} className="w-10" />
        </div>
        <div>
          <img
            src={isMenuOpen ? cancel : menu}
            className="w-10 cursor-pointer invert"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`fixed top-0 right-0 h-screen bg-[#1d1e39] w-screen transition-transform duration-300 z-40 pt-20 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center px-6 py-10 space-y-6">
          <Link
            to="/#home"
            onClick={() => {
              setIsMenuOpen(false);
              handleScrollToTop("home");
            }}
            className="text-white text-lg hover:text-customGreen"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-lg hover:text-customGreen"
          >
            About
          </Link>
          <Link
            to="/#service"
            onClick={() => {
              setIsMenuOpen(false);
              handleScrollToTop("service");
            }}
            className="text-white text-lg hover:text-customGreen"
          >
            Service
          </Link>
          <Link
            to="/#pricing"
            onClick={() => {
              setIsMenuOpen(false);
              handleScrollToTop("pricing");
            }}
            className="text-white text-lg hover:text-customGreen"
          >
            Pricing
          </Link>
          <Link to="/contact">
            <div
              onClick={() => setIsMenuOpen(false)}
              className="bg-customGreen relative flex px-2 py-[10px] rounded-lg gap-3 cursor-pointer hover:bg-customBlue duration-500 text-customBlue uppercase text-[13px] hover:text-customGreen group"
            >
              <div className="relative w-5 h-5">
                <img
                  src={contact_black}
                  className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                />
                <img
                  src={contact_green}
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <h1>Contact</h1>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
