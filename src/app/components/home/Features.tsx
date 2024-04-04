import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import DirectoriesTabs from "./DirectoriesTabs";
import Link from "next/link";

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
                     Discover, list, and{" "}
                     <Typography color="primary" variant="inherit" component="span">
                        thrive
                     </Typography>{" "}
                     in the world of opportunities
                  </Typography>
                  <Typography className="max-w-[25rem] py-3">
                     Unlock a wealth of opportunities in our comprehensive Inc Connect directory. Find and showcase
                     services, connect with industry leaders, and elevate your business.{" "}
                  </Typography>

                  <div className="flex gap-3 items-center">
                     <Button component={Link} href="/inc-connect" endIcon={<ArrowRightAlt />}>
                        Start Exploring
                     </Button>
                     <Button component={Link} href="/signup" color="primary">
                        Join!
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
                  <Button component={Link} href="/signup" endIcon={<ArrowRightAlt />}>
                     Signup
                  </Button>
               </Box>
            </Grid>
         </Grid>
      </>
   );
}
