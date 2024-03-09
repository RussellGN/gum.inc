"use client";

import { ThemeOptions, createTheme } from "@mui/material";

export const themeOptions: ThemeOptions = {
   palette: {
      primary: {
         main: "#b58536",
      },
      secondary: {
         main: "rgba(93,118,138,0.69)",
      },
   },
   components: {
      MuiButton: {
         defaultProps: {
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
   },
};

const theme = createTheme(themeOptions);

export default theme;
