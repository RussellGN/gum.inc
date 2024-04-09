import DashboardNav from "@/app/components/dashboard/DashboardNav";
import { Business, EventAvailable } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
   return (
      <>
         <div className="flex gap-3 items-center justify-end mb-4 ">
            <Button
               size="medium"
               variant="outlined"
               color="primary"
               component={Link}
               href="/new/event"
               endIcon={<EventAvailable />}
            >
               Create Event Page
            </Button>
            <Button
               size="medium"
               variant="outlined"
               color="primary"
               component={Link}
               href="/new/organization"
               endIcon={<Business />}
            >
               Create Organisation Page
            </Button>
         </div>

         <Grid container gap={2} wrap="nowrap">
            <DashboardNav />
            <Grid item xs={11}>
               <div>{children}</div>
            </Grid>
         </Grid>
      </>
   );
}
