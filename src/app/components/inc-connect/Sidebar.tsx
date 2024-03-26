"use client";

import { directories } from "@/app/lib/constants";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import DirectoryCard from "./DirectoryCard";
import { expandSize } from "@/app/types";
import Image from "next/image";
import images from "@/app/assets";

export default function Sidebar() {
   const [expand] = useState<expandSize>("normal");

   return (
      <Grid item xs md={expand === "normal" ? 2.5 : "auto"}>
         <Box className="h-[80vh] overflow-y-auto border rounded-[15px] bg-white p-4 sticky top-[100px]">
            {/* {expand === "minimized" ? (
               <Button endIcon={<Fullscreen />}>Maximize</Button>
            ) : (
               <Button endIcon={<FullscreenExit />}>Minimize </Button>
            )} */}

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

            <ul className="list-none">
               {directories.map((dir) => (
                  <li key={dir.name}>
                     <DirectoryCard dir={dir} expand={expand} />
                  </li>
               ))}
            </ul>
         </Box>
      </Grid>
   );
}
