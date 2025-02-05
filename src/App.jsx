import Hero from "./components/herosection";
import NavBar from "./components/navbar";
import CoreMission from "./components/mission";
import Offer from "./components/offer";
import Pricing from "./components/pricing";
import Partners from "./components/partners";
import Testmonial from "./components/testmonial";

const App = () => {
  return (
    <div className="bg-[#0c3045] min-h-screen font-poppins px-[90px]">
      <NavBar />
      <Hero />
      <CoreMission />
      <Offer />
      <Partners/>
      <Pricing />
      <Testmonial/>
    </div>
  );
};

export default App;
