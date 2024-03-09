import { PropsWithChildren } from "react";
import MuiThemeProvider from "./MuiThemeProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import ReactQueryProvider from "./ReactQueryProvider";

export default function Providers({ children }: PropsWithChildren) {
   return (
      <ReactQueryProvider>
         <AppRouterCacheProvider>
            <MuiThemeProvider>{children}</MuiThemeProvider>
         </AppRouterCacheProvider>
      </ReactQueryProvider>
   );
}
