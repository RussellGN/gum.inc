import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers/Providers";
import { madimiOne } from "./components/general/fonts";
import { Typography } from "@mui/material";

export const metadata: Metadata = {
   title: "Gum.iNc",
   description: "a platform for creatives to connect and grow",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <Providers>
         <html lang="en">
            <body className={madimiOne.className}>
               <div className="xl:hidden">
                  <Typography className="p-3 h-[100vh] flex items-center justify-center text-center">
                     Currently not viewable on mobile
                  </Typography>
               </div>

               <div className="hidden lg:block">{children} </div>
            </body>
         </html>
      </Providers>
   );
}
