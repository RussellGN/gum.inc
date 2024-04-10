import InboxSidebar from "@/app/components/inbox/InboxSidebar";
import { Box, Grid } from "@mui/material";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
   return (
      <Grid container gap={3}>
         <Grid item xs md={3}>
            <InboxSidebar />
         </Grid>

         <Grid item xs md>
            <Box className="h-[80vh] overflow-y-auto border rounded-[15px] bg-white p-4 sticky top-[100px]">{children}</Box>
         </Grid>
      </Grid>
   );
}
