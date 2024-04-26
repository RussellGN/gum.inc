import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import ValuePropositionGraphic from "./ValuePropositionGraphic";

export default function ValueProposition() {
   return (
      <Grid container alignItems={{ md: "center" }} justifyContent="center" className="min-h-[90vh]">
         <Grid item xs={7.5} sm={5}>
            <ValuePropositionGraphic />
         </Grid>

         <Grid item xs={12} md={5} sx={{ pl: { md: 8 } }}>
            <Box sx={{ textAlign: { xs: "center", md: "left" }, pr: { md: 5 } }}>
               <Typography variant="h2">Yellow pages done right</Typography>
               <Typography
                  className="py-3"
                  sx={{ px: { xs: 1, md: "unset" }, maxWidth: "25rem", mx: { xs: "auto", md: "unset" } }}
               >
                  GUM.INC unites businesses, professionals, creatives and other entities on a single platform, facilitating
                  seamless discovery and connection.
               </Typography>
               <Button component={Link} href="/inc-connect" endIcon={<ArrowRightAlt />}>
                  Start Exploring
               </Button>
            </Box>
         </Grid>
      </Grid>
   );
}
