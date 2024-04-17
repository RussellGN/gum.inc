import SettingsSidebar from "@/app/components/settings/SettingsSidebar";
import { Box, Grid } from "@mui/material";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
   return (
      <Grid container gap={3}>
         <Grid item xs md={3}>
            <SettingsSidebar />
         </Grid>

         <Grid item xs md>
            <Box className="min-h-[80vh] border rounded-[15px] bg-white p-8">{children}</Box>
         </Grid>
      </Grid>
   );
}
