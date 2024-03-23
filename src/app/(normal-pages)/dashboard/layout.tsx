import DashboardNav from "@/app/components/dashboard/DashboardNav";
import { Grid } from "@mui/material";
import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
   return (
      <Grid container gap={2}>
         <DashboardNav />
         <Grid item xs={11}>
            <div>{children}</div>
         </Grid>
      </Grid>
   );
}
