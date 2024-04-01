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
         {/* <Snackbar /> */}
         <IconButton onClick={saveInc} title="Save Inc?" size={size || "small"} color="primary" sx={sx}>
            {saved ? <BookmarkAdd /> : <BookmarkAddOutlined />}
         </IconButton>
      </>
   );
}
