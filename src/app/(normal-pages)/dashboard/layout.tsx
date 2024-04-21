import DashboardNav from "@/app/components/dashboard/DashboardNav";
import PageCreationButtons from "@/app/components/dashboard/pageCreationButtons";
import { Grid } from "@mui/material";
import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
   return (
      <>
         <PageCreationButtons />

         <Grid container gap={2} wrap="nowrap">
            <DashboardNav />
            <Grid item xs={12} md={11}>
               <div>{children}</div>
            </Grid>
         </Grid>
      </>
   );
}
