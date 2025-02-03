import Button from "./button";
import bgImage from "../assets/bg.png";

const Hero = () => {
  return (
    <div className="flex justify-between items-center py-10 px-5">
      <div className="flex flex-col">
        <h1 className="text-customTitle text-[13px]">
          <span className="uppercase text-customGreen font-bold mr-5">
            Active community
          </span>
          Trusted provider
        </h1>
        <h1 className=" capitalize text-white text-[70px]">
          Learn.Trade.
          <span className="block text-customGreen"> Succeed.</span>
        </h1>
        <p className="text-customTitle text-[15px]">
          Where professional grade market analysis & vibrant social community
          converge.
        </p>
        <Button
          className="mt-10 bg-customGreen text-customBlue w-fit capitalize px-10 py-2 rounded-lg text-[15px] tracking-wide hover:text-customGreen hover:bg-customBlue duration-500"
          text="get started"
        />
      </div>
      {/* hero image */}

      <img src={bgImage} className="w-2/5" />
    </div>
  );
};

export default Hero;
