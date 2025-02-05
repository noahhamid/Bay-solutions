import Button from "./button";
import Box from "./box";

const CoreMission = () => {
  return (
    <div className="bg-[#283F58] px-10 py-20 rounded-xl mt-20">
      {/* box */}
      <div className="flex items-center gap-5">
        <h1 className="text-customTitle uppercase text-[13px] tracking-[5px]">
          Bay <span className="px-2">solution's</span>{" "}
          <span className="text-customGreen">Goal</span>
        </h1>
      </div>
      <h1 className="text-center text-white text-[30px]">
        "We Craft Impactful Websites for
        <span className="block text-customGreen">Visionary Brands"</span>
      </h1>
      <div className="flex justify-between space-x-10 mt-20 text-customTitle">
        <div className="w-full space-y-5">
          <h1 className="uppercase text-white text-[30px]">
            Core <span className="text-customGreen">Mission</span>
          </h1>
          <p className="text-[17px] leading-8">
            The mission of Bay Solution is to empower businesses by delivering
            exceptional, customized websites. Our expert team collaborates
            closely with individuals, groups, and companies to create digital
            solutions that perfectly align with their goals. We aim to elevate
            brands through thoughtful design, user-friendly functionality, and
            cutting-edge technology, ensuring every project delivers maximum
            value and long-term success.
          </p>
        </div>
        <Box
          title="A hard truth about trading"
          number="71%"
          text="A vast majority (94%) of individuals who start trading without proper education and community support end up losing their entire investment within just six months"
        />
        <Box
          title="Consistency via collaboration"
          text="Traders who engage in continuous learning and leverage community activities are significantly (71%) more likely to achieve consistent results over time, demonstrating the power of a well-informed and collaborative approach to trading"
          number="94%"
        />
      </div>
    </div>
  );
};

export default CoreMission;
