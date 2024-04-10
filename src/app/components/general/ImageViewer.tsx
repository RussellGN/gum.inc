"use client";

import { Box, Button, Dialog, IconButton } from "@mui/material";
import { Fullscreen, FullscreenExit } from "@mui/icons-material";
import { useState } from "react";
import { StaticImageData } from "next/image";
import AspectContainedNextImage from "./AspectContainedNextImage";

export default function ImageViewer({ image, alt }: { image: string | StaticImageData; alt: string }) {
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <>
         <button
            className="absolute top-0 right-0 rounded-bl-lg bg-black text-white p-2 hover:bg-gray-900"
            onClick={handleClickOpen}
            type="button"
         >
            <Fullscreen />
         </button>

         <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
            <Box className="p-4">
               <div className="text-right">
                  <IconButton onClick={handleClose} type="button">
                     <FullscreenExit />
                  </IconButton>
               </div>
               <div>
                  <AspectContainedNextImage src={image} alt={alt} />
               </div>
            </Box>
         </Dialog>
      </>
   );
}
