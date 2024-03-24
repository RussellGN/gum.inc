import AccountActivity from "@/app/components/dashboard/AccountActivity";
import Demographic from "@/app/components/dashboard/Demographic";
import Earnings from "@/app/components/dashboard/Earnings";
import IncScore from "@/app/components/dashboard/IncScore";
import Statistics from "@/app/components/dashboard/Statistics";
import { Box, Grid, Typography } from "@mui/material";

export default function page() {
   return (
      <Grid container spacing={2}>
         <Grid item xs={12}>
            <Box sx={{ p: 3 }}>
               <Typography variant="h2">Account Overview</Typography>
               <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti praesentium expedita repudiandae, at
                  quisquam reprehenderit. Cupiditate labore ipsum id ea!
               </Typography>
            </Box>
         </Grid>

         <Grid item xs={12} md={8}>
            <AccountActivity />
         </Grid>

         <Grid item xs={12} md>
            <IncScore />
         </Grid>

         <Grid item xs={12} md={4}>
            <Earnings />
         </Grid>

         <Grid item xs={12} md={8}>
            <Demographic />
         </Grid>

         <Statistics />
      </Grid>
   );
}
