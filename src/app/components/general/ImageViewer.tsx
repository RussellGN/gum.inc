"use client";

import { Box, Dialog, IconButton } from "@mui/material";
import { Close, Fullscreen } from "@mui/icons-material";
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
            className="absolute top-0 right-0 rounded-bl-lg bg-black text-white px-1 py-0.5 transition-all hover:bg-gray-600"
            onClick={handleClickOpen}
            type="button"
         >
            <Fullscreen />
         </button>

         <Dialog
            PaperProps={{
               sx: { borderRadius: "20px" },
            }}
            fullWidth
            maxWidth="md"
            open={open}
            onClose={handleClose}
         >
            <Box className="p-3">
               <div className="text-right mb-3">
                  <IconButton size="small" onClick={handleClose} type="button">
                     <Close />
                  </IconButton>
               </div>
               <div>
                  <AspectContainedNextImage src={image} alt={alt} sx={{ borderRadius: "15px" }} />
               </div>
            </Box>
         </Dialog>
      </>
   );
}
