import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers/Providers";
import { madimiOne } from "./components/general/fonts";

export const metadata: Metadata = {
   title: "Gum.iNc",
   description: "a platform for creatives to connect and grow",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <Providers>
         <html lang="en">
            <body className={madimiOne.className}>{children}</body>
         </html>
      </Providers>
   );
}
