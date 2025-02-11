const Offer_Box = ({ title, text, className }) => {
  return (
    <div
      className={`${className} lg:absolute inset-0 flex justify-center items-center mt-5`}
    >
      <div className="lg:max-w-sm space-y-4 border border-[#192B3F] rounded-md px-5 py-5 bg-customBlue opacity-80 transition-all ease-in-out duration-300 ">
        <h1 className="text-customGreen">{title}</h1>
        <p className="text-customTitle text-[13px]">{text}</p>
      </div>
    </div>
  );
};

export default Offer_Box;
