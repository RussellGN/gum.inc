import { Box, Button, Grid, Typography } from "@mui/material";
import HeroAnimationGrid from "./HeroAnimationGrid";
import Link from "next/link";
import { ArrowRightAlt } from "@mui/icons-material";

export default function Hero() {
   return (
      <Grid container spacing={5} alignItems="center" justifyContent="center" sx={{ minHeight: "80vh" }}>
         <Grid item xs={12} md="auto">
            <Box sx={{ textAlign: { xs: "center", md: "unset" }, py: { xs: 10, md: "unset" } }}>
               <Typography variant="h1">
                  Discover, Connect <br className="hidden md:inline" /> and{" "}
                  <Box component="span" sx={{ color: "primary.light" }}>
                     Grow
                  </Box>
               </Typography>
               <Typography className="py-3" sx={{ maxWidth: { md: "20rem" }, px: { xs: 1, md: "unset" } }}>
                  Explore and engage a vibrant community of professionals, businesses and events. Fuel your growth with our
                  impactful newsletters
                  <br />
               </Typography>
               <Button size="medium" component={Link} href="/inc-connect" endIcon={<ArrowRightAlt />}>
                  Start Exploring
               </Button>
            </Box>
         </Grid>

         <Grid item xs={12} md={5}>
            <HeroAnimationGrid />
         </Grid>
      </Grid>
   );
}
