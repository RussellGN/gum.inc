import { CircularProgress } from "@mui/material";
import React from "react";

export default function Loading() {
   return (
      <div className="min-h-[70vh] flex items-center justify-center">
         <CircularProgress color="primary" />
      </div>
   );
}
