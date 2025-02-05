import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function Testimonial() {
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
    <>
      <div className="glide-01 relative w-full mt-28 py-10">
        <div className="text-center mb-5">
          <h1 className="text-customTitle">Client response</h1>
          <h1 className="text-white text-[50px]">
            What do people <span className=" text-customGreen">think?</span>
          </h1>
        </div>
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="relative flex w-full overflow-hidden p-0">
            {[
              { name: "John Doe", description: "This is an amazing service!" },
              {
                name: "Jane Smith",
                description: "I love the user experience!",
              },
              {
                name: "Alice Brown",
                description: "Highly recommend to everyone!",
              },
              {
                name: "Bob Johnson",
                description: "Great quality and support!",
              },
              {
                name: "Emily Davis",
                description: "The best decision I ever made!",
              },
            ].map((testimonial, index) => (
              <li
                key={index}
                className="bg-[#151c3b] h-[200px] p-6 rounded-lg shadow-lg mx-2 text-center"
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
    </>
  );
}
