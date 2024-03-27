import Listings from "@/app/components/inc-connect/Listings";
import SearchAndControls from "@/app/components/inc-connect/SearchAndControls";
import Sidebar from "@/app/components/inc-connect/Sidebar";
import { Box, Grid } from "@mui/material";

export default function Page() {
   return (
      <>
         {/* <Explainer /> */}
         <Grid container gap={3}>
            <Sidebar />
            <Grid item xs md>
               <Box>
                  <SearchAndControls />
                  <Listings />
               </Box>
            </Grid>
         </Grid>
      </>
   );
}
