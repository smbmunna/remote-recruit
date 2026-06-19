import logo from "../assets/logo.png";
import iconLogo from "../assets/icon_logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaSnapchatGhost,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full  mx-auto  pt-24 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8">
          <div className="flex items-center">
            <span className="text-white text-2xl font-black tracking-tight">
              <img className="w-[180px]" src={logo} alt="logo" />
            </span>
          </div>

          {/* Social Icons Container */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-sm cursor-pointer hover:bg-white/20 transition-all"
            >
              <FaFacebookF size={14} />
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-sm cursor-pointer hover:bg-white/20 transition-all"
            >
              <FaInstagram size={14} />
            </a>

            {/*  X */}
            <a
              href="#"
              aria-label="Twitter"
              className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-sm cursor-pointer hover:bg-white/20 transition-all"
            >
              <FaXTwitter size={14} />
            </a>

            {/* Twitter / X */}
            <a
              href="#"
              aria-label="Twitter"
              className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-sm cursor-pointer hover:bg-white/20 transition-all"
            >
              <FaTwitter size={14} />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-sm cursor-pointer hover:bg-white/20 transition-all"
            >
              <FaLinkedin size={14} />
            </a>

            {/* Snapchat */}
            <a
              href="#"
              aria-label="Snapchat"
              className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-sm cursor-pointer hover:bg-white/20 transition-all"
            >
              <FaSnapchatGhost size={14} />
            </a>
          </div>
        </div>
      </div>

      <div>
        <hr className="text-[#8BA3CC] mt-8 w-full pb-8" />
        <img src={iconLogo} alt="icon logo" className="mx-auto" />
      </div>
    </footer>
  );
}
