"use client";

import GoBackBtn from "@/app/components/general/GoBackBtn";
import InboxSidebar from "@/app/components/inbox/InboxSidebar";
import { Box, Grid } from "@mui/material";
import { useParams } from "next/navigation";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
   const { slug } = useParams();

   return (
      <Grid container gap={3}>
         <Grid item xs={12} md={3} sx={{ display: { xs: slug ? "none" : "unset", md: "unset" } }}>
            <InboxSidebar />
         </Grid>

         <Grid item xs={12} md sx={{ display: { xs: slug ? "unset" : "none", md: "unset" } }}>
            <Box
               sx={{
                  position: { md: "sticky" },
                  overflowY: { md: "auto" },
                  height: { md: "80vh" },
                  px: { xs: "1rem", md: "2rem" },
                  py: "2rem",
               }}
               className="border rounded-[15px] bg-white top-[100px]"
            >
               <Box sx={{ display: { md: "none" } }} className="mb-6">
                  <GoBackBtn noMarginBottom />
               </Box>

               {children}
            </Box>
         </Grid>
      </Grid>
   );
}
