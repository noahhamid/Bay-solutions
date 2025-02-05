import PricingBox from "./pricingbox";
import cancel from "../assets/icons/cancel.svg";
import checkmark from "../assets/icons/checkmark.svg";

const Pricing = () => {
  return (
    <div>
      <h1 className="text-white text-center pt-20 text-[30px]">
        Pick the best
        <span className="text-customGreen"> plan</span>
      </h1>
      <p className="text-center text-customTitle text-[13px]">
        Choose the right plan for your business website.
      </p>
      <div className="flex gap-2 justify-center">
        <div className="w-[350px] bg-[#151c3b] rounded-xl py-10 mt-10 border">
          <h1>hello</h1>
        </div>
        <PricingBox
          price1="24,899 birr"
          price2="18,899 birr"
          text1="Static website"
          text2="Responsive Design"
          text3="Up to 4 Pages"
          text4="Annual Hosting"
          text5="24/7 on-call support"
          className={"flex capitalize text-[14px] text-[#a19f9f]"}
          img={cancel}
          text6="Mobile Optimization"
          disc="Everything you need to get started with a website."
          text7="API Integrations"
        />
        <PricingBox
          price1="32,899 birr"
          price2="26,899 birr"
          text1="Static website"
          text2="Custom Design"
          text3="Up to 8 Pages"
          text4="Annual Hosting"
          text5="24/7 on-call support"
          className={"flex capitalize text-[14px] text-[#a19f9f]"}
          img={cancel}
          text6="Speed Optimization"
          disc="Giving you a flexible website for your business."
          text7="API Integrations"
        />
        <PricingBox
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
          text6="Full SEO & Speed Optimization"
          text7="API Integrations"
        />
      </div>
    </div>
  );
};

export default Pricing;
