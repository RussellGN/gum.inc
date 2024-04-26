import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function ResearchTools() {
   return (
      <Grid
         container
         alignItems="center"
         justifyContent="center"
         direction={{ xs: "column-reverse", md: "row" }}
         gap={10}
         className="min-h-[60vh]  rounded-[20px] mb-20"
         sx={{
            backgroundImage: "url('/svgs/layered-waves-haikei4.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            p: { xs: 2, md: 5 },
         }}
      >
         <Grid item xs={12} md="auto">
            <Box sx={{ pr: { md: 5 } }}>
               <Typography variant="h2">
                  <Box component="span" sx={{ color: "primary.light" }}>
                     Inc Office
                  </Box>{" "}
                  Newsletters for <br /> business insights and research
               </Typography>
               <Typography className="max-w-[25rem] py-3">
                  Stay ahead of the curve: Subscribe to Inc Office newsletters for exclusive business insights and research.
                  Receive curated content straight to your inbox, including industry trends, market analysis, and expert
                  advice to fuel your business growth and success.
               </Typography>
               <Button component={Link} href="/inc-office" color="primary" size="large">
                  Get Started
               </Button>
            </Box>
         </Grid>

         <Grid item xs={12} md={4}>
            <Image src="/svgs/undraw_mailbox_re_dvds.svg" width={160} height={90} alt="online resume" className="w-full" />
         </Grid>
      </Grid>
   );
}
