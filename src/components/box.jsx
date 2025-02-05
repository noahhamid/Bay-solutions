const Box = ({ title, text, number }) => {
  return (
    <div className="w-full h-[40rem] bg-customBlue py-10 rounded-2xl space-y-24">
      <h1 className="uppercase text-[13px] px-8">{title}</h1>
      <p className="text-[17px] leading-8 px-8 h-[12rem]">{text}</p>
      <div>
        <h1 className="border-t border-[#655e5e] py-2 "></h1>
        <h1 className="text-customGreen text-[100px] px-8">{number}</h1>
      </div>
    </div>
  );
};
export default Box;
