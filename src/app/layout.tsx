import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
   title: "Gum.iNc",
   description: "a platform for creatives to connect and grow",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang="en">
         <body className="">{children}</body>
      </html>
   );
}
