import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import landing_anime from "../assets/landing_page.json";

const LandingAnimation = () => {
  return (
    <div className="flex justify-center items-center h-64 overflow-hidden">
      <Lottie
        animationData={landing_anime}
        loop={true}
        className="slide-in-from-right w-64 md:w-[300px] xl:w-[400px]"
      />
    </div>
  );
};

export default LandingAnimation;
