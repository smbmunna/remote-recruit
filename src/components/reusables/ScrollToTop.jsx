import { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi"; // Tailwind-friendly icon library

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          flex items-center justify-center
          w-12 h-12 rounded-full shadow-lg
          bg-[#1E3E85] text-white text-xl
          hover:bg-[#1E3E85]/90 hover:scale-110 
          active:scale-95 transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-[#4BAED4] focus:ring-offset-2
          cursor-pointer
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
        aria-label="Scroll to top"
      >
        <HiArrowUp size={22} className="animate-pulse hover:animate-none" />
      </button>
    </div>
  );
}
