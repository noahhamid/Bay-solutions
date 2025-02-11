import Lottie from "lottie-react";
import offer_anime from "../assets/offer_anime.json";

const Offer_anime = () => {
  return (
    <div className="flex justify-center items-center">
      <Lottie
        animationData={offer_anime}
        loop={true}
        className="md:w-[400px] lg:w-[300px] xl:w-[400px] w-[250px] h-auto"
      />
    </div>
  );
};

export default Offer_anime;
