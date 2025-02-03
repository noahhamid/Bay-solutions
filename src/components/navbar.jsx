import Button from "./button";

const NavBar = () => {
  return (
    <div className="relative text-white capitalize pt-[20px]">
      <div className="sticky border-t border-b border-[#50505f] py-2 flex justify-between items-center">
        {/* logo */}
        <h1>Bay solution</h1>
        {/* navigation */}

        <ul className="text-[13px] flex space-x-[50px]">
          <li>home</li>
          <li>about</li>
          <li>pricing</li>
          <li>contact</li>
        </ul>

        <Button text="Login" className="bg-[#4FD298] text-[#192B3F] px-7 py-2 rounded-lg" />
      </div>
    </div>
  );
};

export default NavBar;
