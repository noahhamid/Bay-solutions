import Lottie from "lottie-react";
import price_anime from '../assets/price_animation.json'

const PriceAnimation = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <Lottie animationData={price_anime} loop={true} className="w-64 h-[400px]" />
    </div>
  );
};

export default PriceAnimation;
