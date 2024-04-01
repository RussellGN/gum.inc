import Listings from "@/app/components/inc-connect/Listings";
import SearchAndControls from "@/app/components/inc-connect/SearchAndControls";
import Sidebar from "@/app/components/inc-connect/Sidebar";
import { Box, CircularProgress, Grid } from "@mui/material";
import { Suspense } from "react";

export default function Page() {
   return (
      <>
         {/* <Explainer /> */}
         <Grid container gap={3}>
            <Sidebar />
            <Grid item xs md>
               <Box>
                  <Suspense>
                     <SearchAndControls />
                  </Suspense>
                  <Suspense
                     fallback={
                        <div className="min-h-[20vh] w-full flex items-center justify-center">
                           <CircularProgress />
                        </div>
                     }
                  >
                     <Listings />
                  </Suspense>
               </Box>
            </Grid>
         </Grid>
      </>
   );
}
