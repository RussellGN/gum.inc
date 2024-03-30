import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function Explainer() {
   return (
      <Grid container alignItems="center" justifyContent="center" gap={3} className="p-10">
         <Grid item xs md={4}>
            <Image
               src="/svgs/undraw_location_search_re_ttoj.svg"
               width={160}
               height={90}
               alt="online search"
               className="w-full max-w-[15rem]"
            />
         </Grid>

         <Grid item xs md="auto">
            <Box sx={{ pr: { md: 5 } }}>
               <Typography variant="h2">
                  Discover{" "}
                  <Box component="span" sx={{ color: "primary.light" }}>
                     Inc Coonections
                  </Box>
               </Typography>
               <Typography className="max-w-[20rem] py-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae voluptatem aperiam, ipsa voluptatum
                  commodi sint qui.
               </Typography>
            </Box>
         </Grid>
      </Grid>
   );
}
