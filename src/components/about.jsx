import Button from "./button";

const About = () => {
  return (
    // parnet div
    <div>
      <div className="min-h-screen"></div>
      <div className="bg-[#283F58] pt-40 px-10">
        <div>
          <div className="flex items-center text-customTitle gap-4 uppercase text-[12px] md:text-[13px]">
            <h1 className="w-[10px] h-[10px] bg-customGreen rounded-sm"></h1>
            <h1 className="tracking-wider">
              {" "}
              what we're <span className="text-customGreen">about</span>
            </h1>
          </div>
          <h1 className="text-white text-[40px]">
            Helping companies <span className="text-customGreen">evolve</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
