import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import ValuePropositionGraphic from "./ValuePropositionGraphic";

export default function ValueProposition() {
   return (
      <Grid container alignItems="center" justifyContent="center" className="min-h-[90vh]">
         <Grid item xs={8} md={5}>
            <ValuePropositionGraphic />
         </Grid>

         <Grid item xs={12} md={5} sx={{ pl: { md: 8 } }}>
            <Box sx={{ textAlign: { xs: "center", md: "left" }, pr: { md: 5 } }}>
               <Typography variant="h2">Yellow pages done right</Typography>
               <Typography className="max-w-prose py-3" sx={{ px: { xs: 1, md: "unset" } }}>
                  GUM.INC brings together businesses, proffessionals, creatives and other entities onto one platform for
                  easy discovery and connecting
               </Typography>
               <Button component={Link} href="/inc-connect" endIcon={<ArrowRightAlt />}>
                  Start Exploring
               </Button>
            </Box>
         </Grid>
      </Grid>
   );
}
