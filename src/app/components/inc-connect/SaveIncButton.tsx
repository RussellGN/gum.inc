"use client";

import { BookmarkAddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

export default function SaveIncButton() {
   // function saveInc(e: Event) {
   //    e.stopPropagation();
   //    // e.stopImmediatePropagation();
   //    alert("inc was saved");
   // }

   return (
      <IconButton onClick={(e) => e.stopPropagation()} title="Save Inc?" size="small" color="secondary">
         <BookmarkAddOutlined />
      </IconButton>
   );
}
