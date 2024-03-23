"use client";

import { ThemeOptions, createTheme } from "@mui/material";
import { primaryColor, primaryDarkColor, secondaryColor, secondaryDarkColor } from "../lib/constants";

export const themeOptions: ThemeOptions = {
   palette: {
      primary: {
         main: primaryColor,
         dark: primaryDarkColor,
      },
      secondary: {
         main: secondaryColor,
         dark: secondaryDarkColor,
      },
      text: {
         primary: "rgb(90,90,90)",
      },
   },
   typography: {
      h1: {
         fontSize: "3rem",
      },
      h2: {
         fontSize: "1.7rem",
      },
      h3: {
         fontSize: "1.5rem",
      },
      h4: {
         fontSize: "1.2rem",
      },
      h5: {
         fontSize: "1.1rem",
      },
      h6: {
         fontSize: "1rem",
      },
   },
   components: {
      MuiButton: {
         defaultProps: {
            color: "secondary",
            variant: "contained",
            size: "small",
            sx: {
               px: 2,
               borderBottom: "solid 3px",
               "&:hover": {
                  boxShadow: "none",
               },
            },
         },
         styleOverrides: {
            root: {
               borderRadius: "20px",
               textTransform: "capitalize",
               boxShadow: "none",
            },
         },
      },
      MuiIconButton: {
         defaultProps: {
            sx: {
               transition: "border 135ms linear",
               border: "solid thin transparent",
               "&:hover": { border: "solid thin" },
            },
         },
      },
      MuiTextField: {
         defaultProps: {
            sx: { "& .MuiInputBase-root": { borderRadius: "20px" } },
         },
      },
      MuiTypography: {
         defaultProps: { fontFamily: "inherit" },
      },
   },
};

const theme = createTheme(themeOptions);

export default theme;
