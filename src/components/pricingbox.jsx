import Button from "./button";
import checkmark from "../assets/icons/checkmark.svg";


const PricingBox = ({mode,price1,price2, text1, text2, text3, text4, text5, text6, text7 ,img , className , disc}) => {
  return (
    <div className="  bg-[#151c3b] rounded-xl py-10 mt-10 border border-[#858282] lg:w-[330px]">
      <div className="px-5">
        <h1 className="text-white font-bold text-[20px] pb-5">{mode}</h1>
        <h1 className="text-customGreen font-bold text-[15px] line-through">
          {price1}
        </h1>
        <h1 className="text-customGreen font-bold text-[30px] pb-5">
          {price2}
        </h1>
        <p className="text-customTitle text-[12px] pb-5">
          {disc}
        </p>
        <Button
          text="Get Started"
          className="bg-customGreen text-customBlue w-full rounded-md tracking-wide py-[10px] hover:text-customGreen hover:bg-customBlue duration-500"
        />
      </div>
      <div className="border-t mt-[30px] py-1 border-[#858282]"></div>
      <div className="mt-5 px-7 space-y-8">
        <h1 className="flex text-white capitalize text-[14px]">
          <img src={checkmark} className="w-[20px] mr-3" />
          {text1}
        </h1>
        <h1 className="flex text-white capitalize text-[14px]">
          <img src={checkmark} className="w-[20px] mr-3" />
          {text2}
        </h1>
        <h1 className="flex text-white capitalize text-[14px]">
          <img src={checkmark} className="w-[20px] mr-3" />
          {text3}
        </h1>
        <h1 className="flex text-white capitalize text-[14px]">
          <img src={checkmark} className="w-[20px] mr-3" />
          {text4}
        </h1>
        <h1 className="flex text-white capitalize text-[14px] ">
          <img src={checkmark} className="w-[20px] mr-3" />
          {text5}
        </h1>
        <h1 className="flex text-white capitalize text-[14px]">
          <img src={checkmark} className="w-[20px] mr-3" />
          {text6}
        </h1>
        <h1 className={className}>
          <img src={img} className="w-[20px] mr-3" />
          {text7}
        </h1>
      </div>
    </div>
  );
};

export default PricingBox;
