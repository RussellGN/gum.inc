"use client";

import { BookmarkAdd, BookmarkAddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";

export default function SaveIncButton() {
   const [saved, setSaved] = useState(false);

   function saveInc() {
      setSaved((prev) => !prev);
   }

   return (
      <>
         {/* <Snackbar /> */}
         <IconButton onClick={saveInc} title="Save Inc?" size="small" color="primary">
            {saved ? <BookmarkAdd /> : <BookmarkAddOutlined />}
         </IconButton>
      </>
   );
}
