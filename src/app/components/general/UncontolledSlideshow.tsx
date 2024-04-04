"use client";

import { JSX, useEffect, useState } from "react";

export default function UncontolledSlideshow({ slides, interval }: { slides: JSX.Element[]; interval?: number }) {
   const [currentSlide, setCurrentSlide] = useState(0);

   function nextSlide() {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
   }

   useEffect(() => {
      const animationInterval = setInterval(nextSlide, interval || 4000);
      return () => clearInterval(animationInterval);
   }, [interval]);

   return (
      <div className="w-full h-full relative">
         {slides.map((slide, index) => (
            <div
               key={index}
               className={`${index === currentSlide ? "opacity-100" : "opacity-0"} absolute top-0 left-0 w-full h-full`}
               style={{ transition: "opacity 1s linear" }}
            >
               {slide}
            </div>
         ))}
      </div>
   );
}
