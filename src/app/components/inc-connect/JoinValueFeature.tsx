import images from "@/app/assets";
import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function JoinValueFeature() {
   return (
      <Grid container alignItems="center" justifyContent="center" gap={5} className="min-h-[60vh]">
         <Grid item xs md={4}>
            <div className="relative w-full h-[20rem] flex items-center justify-center">
               <div className="bg-gray-600 border rounded-xl w-6/12 h-[70%] absolute top-1/2 -translate-y-1/2 "></div>
               <div className="bg-gray-500 border rounded-xl w-7/12 h-[70%] absolute top-1/2 -translate-y-1/2 mt-3" />
               <div className="bg-gray-400 border rounded-xl w-8/12 h-[70%] absolute top-1/2 -translate-y-1/2 mt-6" />
               <div className="bg-gray-300 border rounded-xl w-9/12 h-[70%] absolute top-1/2 -translate-y-1/2 mt-9" />
               <div className="bg-gray-200 border rounded-xl w-10/12 h-[70%] absolute top-1/2 -translate-y-1/2 mt-9" />
            </div>
         </Grid>

         <Grid item xs md="auto">
            <Box sx={{ pr: { md: 5 } }}>
               <Typography variant="h2">Whats in store for Joining the network?</Typography>
               <Typography className="max-w-[15rem] py-3">
                  Lorem ipsum dolor sit amet. Illum vero corrupti molestiae?
                  <br />
               </Typography>
               <div className="flex items-center gap-3">
                  <Button size="large" endIcon={<ArrowRightAlt />}>
                     Join Now
                  </Button>
                  <Button variant="outlined">Read More</Button>
               </div>
            </Box>
         </Grid>
      </Grid>
   );
}
