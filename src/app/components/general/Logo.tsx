"use client";

import useIsMobile from "@/app/hooks/useIsMobile";
import { gradients } from "@/app/lib/constants";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function Logo() {
   const isMobile = useIsMobile();

   return (
      <Typography
         component={Link}
         href="/"
         color="primary"
         variant={isMobile ? "h4" : "h3"}
         sx={{
            position: "relative",
            display: "inline-block",
            background: gradients.primary1,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bolder",
         }}
      >
         GUM.INC
      </Typography>
   );
}
