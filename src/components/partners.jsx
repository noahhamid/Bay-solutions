import layodacha from "../assets/layodacha.png";
import pivot from "../assets/pivot.png";
import bukuabal from "../assets/bukuabal.png";
import naifty from "../assets/naifty.png";

const Partners = () => {
  return (
    <div className="text-center text-white mt-20 relative">
      <h1 className="text-[30px]">
        Trusted by 10+{" "}
        <span className="text-customGreen">Leading Companies</span>
      </h1>
      <p className="w-2/5 text-[13px] mx-auto mt-3 text-customTitle">
        Join us on this transformative journey. Let us empower your business,
        elevate your online presence, and unlock your true digital potential.
        Together, we will make a profound impact on Ethiopia, one website at a
        time.
      </p>
      
      {/* Fading Effect Overlay */}
      <div className="relative overflow-hidden w-full mt-10">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#2e274a] to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#2e274a] to-transparent z-10"></div>
        
        {/* Sliding Logos */}
        <div className="flex items-center gap-20 animate-scroll">
          <img src={pivot} className="h-10 w-auto border-r-2" />
          <img src={layodacha} className="h-10 w-auto" />
          <img src={naifty} className="h-10 w-auto" />
          <img src={bukuabal} className="h-10 w-auto" />
          {/* Duplicating images for smooth infinite scrolling */}
          <img src={pivot} className="h-10 w-auto" />
          <img src={layodacha} className="h-10 w-auto" />
          <img src={naifty} className="h-10 w-auto" />
          <img src={bukuabal} className="h-10 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
