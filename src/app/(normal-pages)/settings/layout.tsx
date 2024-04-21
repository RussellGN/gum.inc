"use client";

import GoBackBtn from "@/app/components/general/GoBackBtn";
import SettingsSidebar from "@/app/components/settings/SettingsSidebar";
import { Box, Grid } from "@mui/material";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
   const { name } = useParams();

   return (
      <Grid container gap={3}>
         <Grid item xs={12} md={3} sx={{ display: { xs: name ? "none" : "unset", md: "unset" } }}>
            <SettingsSidebar />
         </Grid>

         <Grid item xs={12} md sx={{ display: { xs: name ? "unset" : "none", md: "unset" } }}>
            <Box className="min-h-[80vh] border rounded-[15px] bg-white p-8">
               <Box sx={{ display: { md: "none" } }} className="-ml-4 mb-6">
                  <GoBackBtn noMarginBottom />
               </Box>

               {children}
            </Box>
         </Grid>
      </Grid>
   );
}
