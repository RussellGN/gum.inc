"use client";

import { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { PrevButton, NextButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";

export default function EmblaCarousel({ slides }: { slides: JSX.Element[] }) {
   const options: EmblaOptionsType = { direction: "rtl", loop: true };
   const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

   const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop = autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;

      resetOrStop();
   }, []);

   const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(
      emblaApi,
      onNavButtonClick
   );

   return (
      <div className="border-t-8 flex h-fit text-center justify-center py-4">
         <div className="flex items-center justify-center">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
         </div>

         {/* <div className="border-r-8 border-l-8 px-8 py-4"> */}
         <div className="px-8 py-4">
            <section className="embla" dir="rtl">
               <div className="embla__viewport" ref={emblaRef}>
                  <div className="embla__container">
                     {slides.map((slide, index) => (
                        <div className="embla__slide" key={"slide-" + index}>
                           <div className="embla__slide__number">{slide}</div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>
         </div>

         <div className="flex items-center justify-center">
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
         </div>
      </div>
   );
}
