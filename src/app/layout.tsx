import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers/Providers";

export const metadata: Metadata = {
   title: "Gum.iNc",
   description: "a platform for creatives to connect and grow",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <Providers>
         <html lang="en">
            <body className="min-h-[100vh]">{children}</body>
         </html>
      </Providers>
   );
}
