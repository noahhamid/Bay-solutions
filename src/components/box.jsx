import { useEffect, useState } from "react";

const Box = ({ title, text, number, className }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".scroll-fade").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add("visible");

          // Start counting animation with a delay when the element becomes visible
          if (count === 0) {
            const targetNumber = parseInt(number); // Parse the string number to an integer
            const duration = 0.1; // Adjust the duration to 0.1 seconds for ultra-fast counting
            const increment = targetNumber / (duration * 100); // Higher increment for faster counting
            let currentNumber = 0;

            // Add a delay before the counting starts (e.g., 500ms delay)
            const delay = 500; // Delay in milliseconds

            setTimeout(() => {
              const counter = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= targetNumber) {
                  setCount(targetNumber); // Set to target number
                  clearInterval(counter); // Stop the animation
                } else {
                  setCount(Math.floor(currentNumber)); // Round the number
                }
              }, 10); // Run the interval every 10ms for super fast counting
            }, delay); // Delay counting start by 500ms
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [count, number]); // Depend on `count` and `number`

  return (
    <div
      className={`w-full h-[30rem] md:h-[40rem] lg:w-[400px] xl:w-4/5 bg-customBlue px-4 xl:px-10 py-10 rounded-2xl md:space-y-24 scroll-fade mt-10 xl:mt-0 ${className}`}
    >
      <h1 className="uppercase text-[13px] md:text-[14px] text-white tracking-wide">
        {title}
      </h1>
      <p className="text-[13px] md:text-[15px] md:leading-6 mt-10 md:mt-0 h-[12rem]">
        {text}
      </p>
      <div>
        <h1 className="border-t mt-10 border-[#655e5e] py-2"></h1>
        <h1 className="text-customGreen text-[80px] md:text-[100px]">{count}%</h1>
      </div>
    </div>
  );
};

export default Box;
