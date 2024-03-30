import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import DirectoriesTabs from "./DirectoriesTabs";

export default function Features() {
   return (
      <>
         <Grid
            container
            alignItems="center"
            justifyContent="center"
            gap={6}
            className="min-h-[70vh] bg-white border rounded-[20px] shadow-lg mb-20 py-10"
         >
            <Grid item xs md="auto">
               <Box sx={{ pr: { md: 5 } }}>
                  <Typography variant="h2" className="max-w-[25rem]">
                     Explore{" "}
                     <Typography color="primary" variant="inherit" component="span">
                        Inc Listings
                     </Typography>{" "}
                     with our curated directory-categories
                  </Typography>
                  <Typography className="max-w-[25rem] py-3">
                     From finance to music, our meticulously curated directory categories provide a gateway to a world of
                     connections and opportunities, tailored to your needs and interests
                  </Typography>

                  <div className="flex gap-3 items-center">
                     <Button endIcon={<ArrowRightAlt />}>Browse directories</Button>
                     <Button variant="outlined" color="primary">
                        Join a directory
                     </Button>
                  </div>
               </Box>
            </Grid>

            <Grid item xs md={5}>
               <DirectoriesTabs />
            </Grid>
         </Grid>

         <Grid
            container
            alignItems="center"
            justifyContent="center"
            gap={5}
            // className="min-h-[60vh] bg-white border rounded-[20px] shadow-lg"
            className="min-h-[60vh] mb-20"
         >
            <Grid item xs md={4}>
               <Image
                  src="/svgs/undraw_connected_2.svg"
                  width={160}
                  height={90}
                  alt="online resume"
                  className="w-full max-w-[15rem]"
               />
            </Grid>

            <Grid item xs md="auto">
               <Box sx={{ pr: { md: 5 } }}>
                  <Typography variant="h2">
                     Signup and be <br />
                     <Box component="span" sx={{ color: "primary.light" }}>
                        discovered
                     </Box>
                  </Typography>
                  <Typography className="max-w-[15rem] py-3">
                     Lorem ipsum dolor sit amet. Illum vero corrupti molestiae?
                     <br />
                  </Typography>
                  <Button endIcon={<ArrowRightAlt />}>Signup</Button>
               </Box>
            </Grid>
         </Grid>
      </>
   );
}
