import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import DirectoriesTabs from "./DirectoriesTabs";
import Link from "next/link";

export default function Features() {
   return (
      <>
         <Box
            className="flex items-center justify-center min-h-[70vh] bg-white border rounded-[20px] shadow-lg mb-20 py-10"
            sx={{ px: 2 }}
         >
            <Grid container alignItems="center" justifyContent="center" gap={6} sx={{ width: "100%" }}>
               <Grid item order={{ xs: 2, md: 1 }} xs={12} md="auto" sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Box sx={{ pr: { md: 5 } }}>
                     <Typography variant="h2" sx={{ maxWidth: { xs: "25rem" }, mx: { xs: "auto", md: "unset" } }}>
                        Discover, list, and{" "}
                        <Typography color="primary" variant="inherit" component="span">
                           thrive
                        </Typography>{" "}
                        in the world of opportunities
                     </Typography>

                     <Typography sx={{ maxWidth: { xs: "25rem" }, mx: { xs: "auto", md: "unset" } }} className="py-3">
                        Unlock a wealth of opportunities in our comprehensive Inc Connect directory. Find or showcase
                        services, connect with industry leaders, and elevate your business.{" "}
                     </Typography>

                     <Box className="flex gap-3 items-center" sx={{ justifyContent: { xs: "center", md: "flex-start" } }}>
                        <Button component={Link} href="/inc-connect" endIcon={<ArrowRightAlt />}>
                           Start Exploring
                        </Button>
                        <Button component={Link} href="/signup" color="primary">
                           Join!
                        </Button>
                     </Box>
                  </Box>
               </Grid>

               <Grid item order={{ xs: 1, md: 2 }} xs={12} sm={8} md={5}>
                  <DirectoriesTabs />
               </Grid>
            </Grid>
         </Box>

         <Box
            className="flex items-center justify-center min-h-[70vh] mb-20"
            sx={{ textAlign: { xs: "center", md: "left" } }}
         >
            <Grid container alignItems="center" justifyContent="center" gap={5} className="w-full">
               <Grid item xs={12} md={4}>
                  <Box className="flex items-center justify-center">
                     <Image
                        src="/svgs/undraw_connected_2.svg"
                        width={160}
                        height={90}
                        alt="online resume"
                        className="w-full max-w-[15rem]"
                     />
                  </Box>
               </Grid>

               <Grid item xs={12} md="auto">
                  <Box sx={{ pr: { md: 5 } }}>
                     <Typography variant="h2">
                        Step into the <br />
                        <Box component="span" sx={{ color: "primary.light" }}>
                           spotlight
                        </Box>
                     </Typography>
                     <Typography
                        className="max-w-[20rem] py-3"
                        sx={{ mx: { xs: "auto", md: "unset" }, px: { xs: 1, md: "unset" } }}
                     >
                        Join our vibrant community of enterpreneurs, professionals, and creatives. Showcase your talents,
                        and grow your network.
                        <br />
                     </Typography>
                     <Button component={Link} href="/signup" endIcon={<ArrowRightAlt />}>
                        Signup
                     </Button>
                  </Box>
               </Grid>
            </Grid>
         </Box>
      </>
   );
}
