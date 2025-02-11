import React, { useEffect, useRef, useState } from "react";
import Glide from "@glidejs/glide";

export default function Testimonial() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div ref={sectionRef} className="glide-01 relative w-full py-28 px-2">
      <div className="text-center mb-10">
        <h1
          className={`text-customTitle text-[12px] md:text-[14px] ${
            isVisible ? "slide-down" : "opacity-0"
          }`}
        >
          Client response
        </h1>
        <h1
          className={`text-white text-[20px] md:text-[40px] ${
            isVisible ? "fade-in" : "opacity-0"
          }`}
        >
          What do people <span className="text-customGreen">think?</span>
        </h1>
      </div>

      <div className="overflow-hidden" data-glide-el="track">
        <ul className="relative flex w-full overflow-hidden p-0">
          {[
            { name: "John Doe", description: "This is an amazing service!" },
            { name: "Jane Smith", description: "I love the user experience!" },
            {
              name: "Alice Brown",
              description: "Highly recommend to everyone!",
            },
            { name: "Bob Johnson", description: "Great quality and support!" },
            {
              name: "Emily Davis",
              description: "The best decision I ever made!",
            },
          ].map((testimonial, index) => (
            <li
              key={index}
              className={`bg-[#283F58] h-[200px] p-6 rounded-lg shadow-lg text-center ${
                isVisible ? "fade-in-up" : "opacity-0"
              }`}
            >
              <h3 className="text-xl font-semibold text-customGreen">
                {testimonial.name}
              </h3>
              <p className="text-[white] mt-2">{testimonial.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="flex h-0 w-full items-center justify-center gap-5 px-4 mt-10"
        data-glide-el="controls"
      >
        <button
          className="h-8 w-8 lg:h-12 lg:w-12 border border-gray-700 rounded-full bg-white/20 text-customGreen transition duration-300 hover:border-gray-900 hover:text-gray-900"
          data-glide-dir="<"
          aria-label="prev slide"
        >
          &#9664;
        </button>
        <button
          className="h-8 w-8 lg:h-12 lg:w-12 border border-gray-700 rounded-full bg-white/20 text-customGreen transition duration-300 hover:border-gray-900 hover:text-gray-900"
          data-glide-dir=">"
          aria-label="next slide"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
}
