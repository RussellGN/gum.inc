"use client";

import { BookmarkAdd, BookmarkAddOutlined } from "@mui/icons-material";
import { IconButton, SxProps } from "@mui/material";
import { useState } from "react";

export default function SaveIncButton({ size, sx }: { size?: "small" | "large" | "medium"; sx?: SxProps }) {
   const [saved, setSaved] = useState(false);

   function saveInc() {
      setSaved((prev) => !prev);
   }

   return (
      <>
         {/* <Snackbar open={open} autoHideDuration={3000} onClose={()=> setOpen(false)} message={saved? 'Inc was un-saved' : 'Inc saved'} /> */}
         <IconButton
            onClick={saveInc}
            title={saved ? "Un-save inc?" : "Save inc?"}
            size={size || "small"}
            color="primary"
            sx={sx}
         >
            {saved ? <BookmarkAdd /> : <BookmarkAddOutlined />}
         </IconButton>
      </>
   );
}
