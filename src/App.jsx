import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import bg from "./assets/hero_bg.png";
import Global from "./components/Global";

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
      <Global/>
    </div>
  );
}

export default App;
