import images from "@/app/assets";
import { Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";

export default function IncOfficeHero() {
   return (
      <Grid container gap={3} alignItems="center" justifyContent="center" sx={{ minHeight: "80vh" }}>
         <Grid item xs={12} md={5}>
            <div className="max-w-prose relative">
               <Typography variant="h1" className="shadow-xl rounded-xl  border-blue-300 p-3">
                  Welcome To{" "}
                  <Typography component="span" fontSize="inherit" color="primary">
                     inc office
                  </Typography>
               </Typography>
               <Typography
                  variant="h2"
                  sx={{ mb: 1 }}
                  className="shadow-xl rounded-xl  border-blue-400 relative -left-10 p-3"
               >
                  Your Gateway to Business Excellence
               </Typography>
               <Typography className="shadow-xl rounded-xl  border-blue-600 relative -right-5 p-5">
                  {/* <Image src={images.undraw_stepping_up_g6oo} alt="mailbox" className="w-[10rem] m-3 float-left" /> */}
                  Welcome to Inc Office, where business insights come to you. Join our exclusive newsletter for a curated
                  selection of strategic tips, marketing trends, and digital growth hacks. Stay ahead of the curve and
                  elevate your business with our valuable content delivered right to your inbox. Subscribe now and unlock
                  the key to sustained success in the dynamic world of entrepreneurship.{" "}
               </Typography>
            </div>
         </Grid>

         <Grid item xs={12} md={4}>
            <div className="">
               <Image src={images.undraw_segment_analysis_re_ocsl as StaticImageData} alt="mailbox" className="w-[80%]" />
               {/* <Image src={images.undraw_stepping_up_g6oo} alt="mailbox" className="w-[80%]" /> */}
            </div>
         </Grid>
      </Grid>
   );
}
