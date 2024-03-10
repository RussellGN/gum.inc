"use client";

import { ThemeOptions, createTheme } from "@mui/material";
import { primaryColor, secondaryColor } from "../lib/constants";

export const themeOptions: ThemeOptions = {
   palette: {
      primary: {
         main: primaryColor,
      },
      secondary: {
         main: secondaryColor,
      },
      text: {
         primary: "rgb(90,90,90)",
      },
   },
   components: {
      MuiButton: {
         defaultProps: {
            color: "secondary",
            variant: "contained",
            size: "small",
            sx: { px: 2 },
         },
         styleOverrides: {
            root: {
               borderRadius: "20px",
               textTransform: "capitalize",
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
