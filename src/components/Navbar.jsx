import logo from "../assets/logo.png";
import bg from "../assets/hero_bg.png";

export default function Navbar() {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="flex items-center justify-between px-4 py-8"
    >
      <img src={logo} alt="site-logo" className="w-30.75" />

      <div className="flex items-center gap-4">
        <div>
          <button className=" text-sm text-white font-semibold">Sign in</button>
        </div>
        <div>
          <button className="bg-[#4DA8CCE5] text-sm text-white font-semibold w-23 h-11 rounded-md">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
