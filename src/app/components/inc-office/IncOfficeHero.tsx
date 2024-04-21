import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ResponsiveTypography from "../general/ResponsiveTypography";

export default function IncOfficeHero() {
   return (
      <Grid container gap={3} alignItems="center" justifyContent="center" sx={{ minHeight: "80vh" }}>
         <Grid item order={{ xs: 2, md: 1 }} xs={12} md={5}>
            {/* <Box sx={{ p: { xs: 3, md: "unset" } }}> */}
            <div className="max-w-prose relative">
               <div className="pl-[10%] md:pl-0">
                  <ResponsiveTypography
                     mobileVariant="h2"
                     desktopVariant="h1"
                     className="shadow-xl rounded-xl  border-blue-300 p-3"
                  >
                     Welcome To{" "}
                     <Typography component="span" fontSize="inherit" color="primary">
                        inc office
                     </Typography>
                  </ResponsiveTypography>
               </div>

               <ResponsiveTypography
                  mobileVariant="h4"
                  desktopVariant="h2"
                  sx={{ mb: 1 }}
                  className="shadow-xl rounded-xl  border-blue-400 w-[90%] md:w-full md:relative md:-left-10 p-3"
               >
                  Your Gateway to Business Excellence
               </ResponsiveTypography>

               <div className="pl-[5%] md:pl-0">
                  <Typography className="shadow-xl rounded-xl border-blue-600 md:relative md:-right-5 p-5">
                     Welcome to Inc Office, where business insights come to you. Join our exclusive newsletter for a curated
                     selection of strategic tips, marketing trends, and digital growth hacks. Stay ahead of the curve and
                     elevate your business with our valuable content delivered right to your inbox. Subscribe now and unlock
                     the key to sustained success in the dynamic world of entrepreneurship.{" "}
                  </Typography>
               </div>
            </div>
            {/* </Box> */}
         </Grid>

         <Grid item order={{ xs: 1, md: 2 }} xs={12} md={4}>
            <Box
               sx={{
                  display: { xs: "flex", md: "unset" },
                  alingItems: "center",
                  justifyContent: { xs: "center", md: "unset" },
               }}
            >
               <Box sx={{ width: { xs: "60%", md: "80%" } }}>
                  <Image
                     src="/svgs/undraw_segment_analysis_re_ocsl.svg"
                     width={160}
                     height={90}
                     alt="mailbox"
                     className="w-full"
                  />
               </Box>
            </Box>
         </Grid>
      </Grid>
   );
}
