import { useEffect, useRef, useState } from "react";

export default function Reveal({ 
  children, 
  variant = "slide-up", 
  duration = "duration-1000", 
  delay = "delay-0" 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);          
        }
      },
      {
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  const variants = {
    "fade-in": {
      hidden: "opacity-0",
      visible: "opacity-100"
    },
    "slide-up": {
      hidden: "opacity-0 translate-y-12",
      visible: "opacity-100 translate-y-0"
    },
    "slide-left": {
      hidden: "opacity-0 translate-x-12",
      visible: "opacity-100 translate-x-0"
    },
    "slide-right": {
      hidden: "opacity-0 -translate-x-12",
      visible: "opacity-100 translate-x-0"
    }
  };

  const selectedVariant = variants[variant] || variants["slide-up"];

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out ${duration} ${delay} ${
        isVisible ? selectedVariant.visible : selectedVariant.hidden
      }`}
    >
      {children}
    </div>
  );
}