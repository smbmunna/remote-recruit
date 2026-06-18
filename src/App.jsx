import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import bg from "./assets/hero_bg.png";
import Global from "./components/Global";
import Fees from "./components/Fees";
import Showcase from "./components/Showcase";

function App() {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Navbar />
        <Hero />
      </div>
      <Global />
      <Fees />
      <Showcase />
    </div>
  );
}

export default App;
