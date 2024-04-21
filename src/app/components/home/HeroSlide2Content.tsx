"use client";

import useIsMobile from "@/app/hooks/useIsMobile";
import { gradients } from "@/app/lib/constants";
import { AutoStories, Workspaces, BusinessCenter, Star } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function HeroSlide2Content() {
   const isMobile = useIsMobile();

   return (
      <Box
         className="h-full text-white border flex flex-col justify-around shadow-lg rounded-[10px] p-2 md:p-3"
         sx={{ background: gradients.primary1 }}
      >
         <Typography
            variant={isMobile ? "caption" : "subtitle2"}
            className="flex items-center mb-1 gap-2.5 md:mb-0 md:gap-3"
         >
            <AutoStories fontSize={isMobile ? "small" : "medium"} />
            <span>10+ Curated Directories</span>
         </Typography>
         <Typography
            variant={isMobile ? "caption" : "subtitle2"}
            className="flex items-center mb-1 gap-2.5 md:mb-0 md:gap-3"
         >
            <Workspaces fontSize={isMobile ? "small" : "medium"} />
            <span>Encompassing Various Industries</span>
         </Typography>
         <Typography
            variant={isMobile ? "caption" : "subtitle2"}
            className="flex items-center mb-1 gap-2.5 md:mb-0 md:gap-3"
         >
            <BusinessCenter fontSize={isMobile ? "small" : "medium"} />
            <span>Proffessionals, Services, Businessses, Events</span>
         </Typography>
         <Typography
            variant={isMobile ? "caption" : "subtitle2"}
            className="flex items-center mb-1 gap-2.5 md:mb-0 md:gap-3"
         >
            <Star fontSize={isMobile ? "small" : "medium"} />
            <span> And More</span>
         </Typography>
      </Box>
   );
}
