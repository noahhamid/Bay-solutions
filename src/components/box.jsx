import { useEffect } from "react";

const Box = ({ title, text, number, className }) => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".scroll-fade").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full h-[30rem] md:h-[40rem] lg:w-[400px] xl:w-4/5 bg-customBlue px-4 xl:px-10 py-10 rounded-2xl  md:space-y-24 scroll-fade mt-10 xl:mt-0 ${className}`}
    >
      <h1 className="uppercase text-[13px] md:text-[14px]  text-white tracking-wide">
        {title}
      </h1>
      <p className="text-[13px] md:text-[17px] md:leading-8 mt-10 md:mt-0  h-[12rem]">{text}</p>
      <div>
        <h1 className="border-t border-[#655e5e] py-2"></h1>
        <h1 className="text-customGreen text-[80px] md:text-[100px] ">{number}</h1>
      </div>
    </div>
  );
};

export default Box;
