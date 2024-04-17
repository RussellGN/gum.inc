"use client";

import { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";
import { IconButton, SxProps } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

export function usePrevNextButtons(
   emblaApi: EmblaCarouselType | undefined,
   onButtonClick?: (emblaApi: EmblaCarouselType) => void
) {
   const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
   const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

   const onPrevButtonClick = useCallback(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
      if (onButtonClick) onButtonClick(emblaApi);
   }, [emblaApi, onButtonClick]);

   const onNextButtonClick = useCallback(() => {
      if (!emblaApi) return;
      emblaApi.scrollPrev();
      if (onButtonClick) onButtonClick(emblaApi);
   }, [emblaApi, onButtonClick]);

   const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
   }, []);

   useEffect(() => {
      if (!emblaApi) return;

      onSelect(emblaApi);
      emblaApi.on("reInit", onSelect);
      emblaApi.on("select", onSelect);
   }, [emblaApi, onSelect]);

   return {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick,
   };
}

const btnSx: SxProps = { border: "solid thin grey" };

export function PrevButton({ disabled, onClick }: { disabled: boolean; onClick: () => void }) {
   return (
      <IconButton sx={btnSx} disabled={disabled} onClick={onClick} className="embla__button--prev">
         <KeyboardArrowLeft />
      </IconButton>
   );
}

export function NextButton({ disabled, onClick }: { disabled: boolean; onClick: () => void }) {
   return (
      <IconButton sx={btnSx} disabled={disabled} onClick={onClick} className="embla__button--next">
         <KeyboardArrowRight />
      </IconButton>
   );
}
