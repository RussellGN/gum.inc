"use client";

import useIsMobile from "@/app/hooks/useIsMobile";
import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

export default function MobileNav() {
   const isMobile = useIsMobile();

   if (isMobile) {
      return (
         <>
            <IconButton size="small" sx={{ mr: 1 }}>
               <Menu />
            </IconButton>
         </>
      );
   }
}
