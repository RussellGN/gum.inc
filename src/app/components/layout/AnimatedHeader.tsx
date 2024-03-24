"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { Box, Container, SxProps, useTheme } from "@mui/material";
import { zIndices } from "@/app/lib/constants";

export default function AnimatedHeader({ children }: PropsWithChildren) {
   const [bodyScrolled, setBodyScrolled] = useState(false);
   const scrollBreakpoint = 5;
   const theme = useTheme();

   useEffect(() => {
      function handleBodyScrolled() {
         if (window.scrollY > scrollBreakpoint) setBodyScrolled(true);
         else setBodyScrolled(false);
      }

      window.addEventListener("scroll", handleBodyScrolled);

      return () => window.removeEventListener("scroll", handleBodyScrolled);
   }, [scrollBreakpoint]);

   const innerBoxstyles: SxProps = {
      py: 0.7,
      borderRadius: bodyScrolled ? "" : "20px",
      transition: "box-shadow 0.1s linear",
      background: theme.palette.background.paper,
      border: "solid thin",
      borderColor: "divider",
      boxShadow: bodyScrolled ? theme.shadows[3] : "",
   };

   return (
      <Container
         component="header"
         maxWidth={bodyScrolled ? false : "lg"}
         sx={{
            mt: 1,
            position: "sticky",
            top: 0,
            zIndex: zIndices.header,
            px: bodyScrolled ? "0 !important" : "",
         }}
      >
         <Box sx={innerBoxstyles}>
            <Container
               sx={{
                  px: {
                     xs: bodyScrolled ? "32px !important" : "",
                     md: bodyScrolled ? `50px !important` : "",
                  },
               }}
            >
               {children}
            </Container>
         </Box>
      </Container>
   );
}
