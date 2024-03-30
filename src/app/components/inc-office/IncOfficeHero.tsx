import { Grid, Typography } from "@mui/material";
import Image from "next/image";

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
                  Welcome to Inc Office, where business insights come to you. Join our exclusive newsletter for a curated
                  selection of strategic tips, marketing trends, and digital growth hacks. Stay ahead of the curve and
                  elevate your business with our valuable content delivered right to your inbox. Subscribe now and unlock
                  the key to sustained success in the dynamic world of entrepreneurship.{" "}
               </Typography>
            </div>
         </Grid>

         <Grid item xs={12} md={4}>
            <div className="">
               <Image src="/svgs/undraw_segment_analysis_re_ocsl.svg" width={160} height={90}  alt="mailbox" className="w-[80%]" />
            </div>
         </Grid>
      </Grid>
   );
}
