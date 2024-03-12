import images from "@/app/assets";
import { Message, Search, Send } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function ValueProposition() {
   return (
      <Grid container alignItems="center" justifyContent="center" className="min-h-[90vh]">
         <Grid item xs md={5}>
            <Box className="h-full  p-5 relative flex items-center justify-center">
               <Box className="border h-[25rem] bg-white w-[15rem] rounded-lg shadow-md relative">
                  <div className="flex items-center h-full justify-center text-center">
                     put my <br />
                     profile here...
                  </div>
                  <Box
                     sx={{ backgroundColor: "primary.light" }}
                     className="border h-[25rem] w-[15rem]  rounded-lg shadow-md absolute top-[-3rem] -right-1/4 rotate-6 -z-10"
                  ></Box>

                  <Box className="bg-[rgba(255,255,255,0.7)] border min-w-[15rem] rounded-lg shadow-md absolute top-1/4 -left-3/4">
                     <div className="py-2 px-3 border gap-4 flex items-center justify-around">
                        <div className="flex items-center gap-2">
                           <Search />
                           <Typography>Art Shops, London</Typography>
                        </div>
                        <Typography variant="subtitle2" className="bg-gray-200 border rounded-lg px-2">
                           found 32
                        </Typography>
                     </div>
                  </Box>

                  <Box className="bg-[rgba(255,255,255,0.7)] border min-w-[15rem] rounded-lg shadow-md absolute bottom-[3rem] -right-1/2">
                     <div className="flex items-center gap-3 py-2 px-3">
                        <Image
                           src={images.user3}
                           alt="user"
                           className="w-10 h-10 object-cover rounded-[100%] border-2 shadow-md"
                        />
                        <div className="mr-auto flex flex-col gap-0">
                           <Typography>Will Cosby</Typography>
                           <Typography color="secondary" variant="caption">
                              Art Dealer
                           </Typography>
                        </div>
                        <Send color="secondary" />
                     </div>
                  </Box>
               </Box>
               {/* <Image src={images.undraw_online_resume} alt="online resume" className="w-full" />{" "} */}
            </Box>
         </Grid>

         <Grid item xs md={5} sx={{ pl: { md: 8 } }}>
            <Box sx={{ pr: { md: 5 } }}>
               <Typography variant="h2">Yellow pages done right</Typography>
               <Typography className="max-w-prose py-3">
                  GUM.INC brings together businesses, proffessionals, creatives and other entities onto one platform for
                  easy discovery and connecting
               </Typography>
               <Button>Get Started</Button>
            </Box>
         </Grid>
      </Grid>
   );
}
