"use client";

import useIsMobile from "@/app/hooks/useIsMobile";
import { SxProps, Typography } from "@mui/material";
import { ReactNode } from "react";

type propTypes = {
   mobileVariant:
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "h5"
      | "h6"
      | "inherit"
      | "body1"
      | "body2"
      | "subtitle1"
      | "subtitle2"
      | "caption";
   desktopVariant:
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "h5"
      | "h6"
      | "inherit"
      | "body1"
      | "body2"
      | "subtitle1"
      | "subtitle2"
      | "caption";
   children: ReactNode;
   sx?: SxProps;
   className?: string;
   fontWeight?: string;
};

export default function ResponsiveTypography({
   mobileVariant,
   desktopVariant,
   children,
   sx,
   className,
   fontWeight,
}: propTypes) {
   const isMobile = useIsMobile();

   return (
      <Typography fontWeight={fontWeight} variant={isMobile ? mobileVariant : desktopVariant} sx={sx} className={className}>
         {children}
      </Typography>
   );
}
