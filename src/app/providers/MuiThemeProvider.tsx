import { PropsWithChildren } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

export default function MuiThemeProvider({ children }: PropsWithChildren) {
   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         {children}
      </ThemeProvider>
   );
}
