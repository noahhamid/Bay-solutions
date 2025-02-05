
import web from "../assets/icons/web.svg";
import uiux from "../assets/icons/uiux.svg";
import mob_app from "../assets/icons/mobile_app.svg";

const Offer = () => {
  return (
    <div className=" pt-20">
      <h1 className=" text-center text-white text-[30px] capitalize">
        we don't just build website
        <span className=" text-customGreen"> we build expriences</span>
      </h1>
      <div className="flex text-customTitle space-x-5 pt-10">
        <div className="w-full h-[25rem] bg-customBlue py-10 px-8 rounded-2xl border">
          <img src={web} className="w-[30px] pb-5" />
          <h1 className="text-white font-bold text-[20px]">Web Development</h1>
          <p className="pt-5">
            Custom Web Solutions to Elevate Your Business From simple landing
            pages to complex e-commerce platforms, we specialize in crafting
            responsive, scalable, and user-friendly websites tailored to your
            business goals.
          </p>
        </div>
        <div className="w-full h-[25rem] bg-customBlue py-10 px-8 rounded-2xl border ">
          <img src={uiux} className="w-[30px] pb-5" />
          <h1 className="text-white font-bold text-[20px]"> UI/UX Design</h1>
          <p className="pt-10">
            Designs That Captivate and Engage Users We focus on creating
            beautiful, easy-to-use interfaces that are visually appealing and
            functionally intuitive, ensuring your users have a smooth and
            enjoyable interaction.
          </p>
        </div>
        <div className="w-full h-[25rem] bg-customBlue py-10 px-8 rounded-2xl border ">
          <img src={mob_app} className="w-[30px] pb-5" />
          <h1 className="text-white font-bold text-[20px]">
            Mobile App Development
          </h1>
          <p className="pt-10">
            Innovative Mobile Experiences for Your Brand Our team creates
            high-performance mobile apps that function seamlessly on both iOS
            and Android, offering your users an engaging, intuitive, and
            reliable experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
