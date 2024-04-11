import { Box, Grid, Typography } from "@mui/material";
import { Suspense } from "react";
import Image from "next/image";
import DirsAccordion from "./DirsAccordion";

export default function Sidebar() {
   return (
      <Grid item xs md={2.5}>
         <Box className="h-[80vh] overflow-y-auto border rounded-[15px] bg-white p-4 sticky top-[100px]">
            <Image
               src="/svgs/undraw_location_search_re_ttoj.svg"
               width={160}
               height={90}
               alt="online search"
               className="w-full mb-4 mx-auto max-w-[7rem]"
            />

            <Typography variant="h5" textAlign="center" sx={{ mb: 3 }}>
               Almanacs & Directories
            </Typography>

            <Suspense>
               <DirsAccordion />
            </Suspense>
         </Box>
      </Grid>
   );
}
