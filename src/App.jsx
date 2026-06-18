import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import bg from "./assets/hero_bg.png";

function App() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
