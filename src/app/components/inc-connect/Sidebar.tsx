"use client";

import { Box, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { expandSize } from "@/app/types";
import Image from "next/image";
import images from "@/app/assets";
import DirsAccordion from "./DirsAccordion";

export default function Sidebar() {
   const [expand] = useState<expandSize>("normal");

   return (
      <Grid item xs md={expand === "normal" ? 2.5 : "auto"}>
         <Box className="h-[80vh] overflow-y-auto border rounded-[15px] bg-white p-4 sticky top-[100px]">
            <Image
               src={images.undraw_location_search_re_ttoj}
               alt="online search"
               className="w-full mb-4 mx-auto max-w-[7rem]"
            />

            <Typography variant="h5" textAlign="center">
               Almanacs & Directories
            </Typography>

            <div className="flex justify-center gap-2 items-center mt-3 mb-5">
               <TextField label="Search..." placeholder="e.g Finance" size="small" />
            </div>

            <DirsAccordion />

            {/* <ul className="list-none">
               {directories.map((dir) => (
                  <li key={dir.name} onClick={() => viewDirectory(dir.name)} className="flex gap-1 items-center">
                     <div className="flex-grow">
                        <DirectoryCard dir={dir} activeDir={activeDir} expand={expand} />
                     </div>
                     <IconButton size="small">
                        <KeyboardArrowDown />
                     </IconButton>
                  </li>
               ))}
            </ul> */}
         </Box>
      </Grid>
   );
}
