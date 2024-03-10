import { PropsWithChildren } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Container } from "@mui/material";

export default function Layout({ children }: PropsWithChildren) {
   return (
      <>
         <Navbar />
         <Container component="main" sx={{ mt: 4 }}>
            {children}
         </Container>
         <Footer />
      </>
   );
}
