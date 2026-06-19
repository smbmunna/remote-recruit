import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import bg from "./assets/hero_bg.png";
import Global from "./components/Global";
import Fees from "./components/Fees";
import Showcase from "./components/Showcase";
import SignUp from "./components/Signup";
import Help from "./components/Help";
import Footer from "./components/Footer";
import footerBg from "./assets/footer_bg.png";

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
      <SignUp />

      {/* footer */}
      {/* <div
        className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <Help />
        <Footer />
      </div> */}

      {/* footer container */}
      <div
        className="bg-cover bg-top bg-no-repeat w-full flex flex-col justify-between mt-80 relative"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        {/* Shifted up an extra 40px to get the cards into the perfect position */}
        <div className="-mt-[270px] relative z-20">
          <Help />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
