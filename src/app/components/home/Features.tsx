import images from "@/app/assets";
import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import DirectoriesTabs from "./DirectoriesTabs";

export default function Features() {
   return (
      <>
         {/* <div className="min-h-[60vh] bg-white border rounded-[20px] shadow-lg mb-20">
            <Grid container alignItems="center" justifyContent="center" gap={6} sx={{ pt: 12 }}>
               <Grid item xs md="auto">
                  <Box sx={{ pr: { md: 5 } }}>
                     <Typography variant="h2" className="max-w-[25rem]">
                        Explore{" "}
                        <Typography color="primary" variant="inherit" component="span">
                           Inc Connections
                        </Typography>{" "}
                        with our curated directory-categories
                     </Typography>
                     <Typography className="max-w-[25rem] py-3">
                        From finance to music, our meticulously curated directory categories provide a gateway to a world of
                        connections and opportunities, tailored to your needs and interests
                     </Typography>

                     <div className="flex gap-3 items-center">
                        <Button endIcon={<ArrowRightAlt />}>Browse directories</Button>
                        <Button variant="outlined" color="primary">Join a directory</Button>
                     </div>
                  </Box>
               </Grid>

               <Grid item xs md={5}>
                  <Image
                     src={images.connectScreenshot}
                     alt="scrrenshot of inc connect page"
                     className="w-full rounded-xl border shadow-lg py-5"
                  />
               </Grid>
            </Grid>

            <div className="p-10">
               <Box sx={{ borderTop: "solid thick", borderColor: "primary.light" }}>
                  <DirectoriesTabs />
               </Box>
            </div>
         </div> */}

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
                  src={images.undraw_connected_2 as StaticImageData}
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

         {/* <Grid
            container
            alignItems="center"
            justifyContent="center"
            gap={10}
            className="min-h-[60vh] bg-white border rounded-[20px] shadow-lg mb-20"
         >
            <Grid item xs md="auto">
               <Box sx={{ pr: { md: 5 } }}>
                  <Typography variant="h2">
                     Discover, Connect <br /> and{" "}
                     <Box component="span" sx={{ color: "primary.light" }}>
                        Grow
                     </Box>
                  </Typography>
                  <Typography className="max-w-[15rem] py-3">
                     Lorem ipsum dolor sit amet. Illum vero corrupti molestiae?
                     <br />
                  </Typography>
                  <Button>Get Started</Button>
               </Box>
            </Grid>

            <Grid item xs md={4}>
               <Image src={images.undraw_online_resume} alt="online resume" className="w-full" />
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
               <Image src={images.undraw_connected_2} alt="online resume" className="w-full max-w-[15rem]" />
            </Grid>

            <Grid item xs md="auto">
               <Box sx={{ pr: { md: 5 } }}>
                  <Typography variant="h2">
                     Discover, Connect <br /> and{" "}
                     <Box component="span" sx={{ color: "primary.light" }}>
                        Grow
                     </Box>
                  </Typography>
                  <Typography className="max-w-[15rem] py-3">
                     Lorem ipsum dolor sit amet. Illum vero corrupti molestiae?
                     <br />
                  </Typography>
                  <Button>Get Started</Button>
               </Box>
            </Grid>
         </Grid> */}
      </>
   );
}
