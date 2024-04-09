"use client";

import { Box, Dialog, Typography } from "@mui/material";
import { Tune } from "@mui/icons-material";
import { useState } from "react";

export default function Filters() {
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
            onClick={handleClickOpen}
            type="button"
            className="bg-[transparent] py-2 px-4 border border-r-0 rounded-tl-[20px] rounded-bl-[20px] hover:bg-slate-50   active:bg-slate-100"
         >
            <Tune />
         </button>

         <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose}>
            <Box className="p-6 min-h-[70vh]">
               <Typography variant="h3" textAlign="center">
                  filters
               </Typography>

               <Typography>filters</Typography>
               <Typography>filters</Typography>
               <Typography>filters</Typography>
               <Typography>filters</Typography>
               <Typography>filters</Typography>
               <Typography>filters</Typography>
               <Typography>filters</Typography>
               <Typography>filters</Typography>
               <Typography>filters</Typography>
               <Typography>filters</Typography>
            </Box>
         </Dialog>
      </>
   );
}
