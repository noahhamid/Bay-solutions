import Hero from "./components/herosection";
import NavBar from "./components/navbar";
import CoreMission from "./components/mission";

const App = () => {
  return (
    <div className="bg-[#0c3045] min-h-screen font-poppins px-[90px]">
      <NavBar/>
      <Hero />
      <CoreMission />
    </div>
  );
};

export default App;
