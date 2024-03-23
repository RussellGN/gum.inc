"use client";

import { option } from "@/app/types";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";

export default function OptionCard({ option, index }: { option: option; index: number }) {
   const [checked, setChecked] = useState(() => index === 0 || index === 1);
   let color: string;

   if (index % 3 === 0) color = "bg-stone-50";
   else if (index % 2 === 0) color = "bg-zinc-100";
   else color = "bg-zinc-200";

   color = checked ? "bg-[rgba(255,255,255,0.5)] backdrop-blur" : "bg-white";
   color = checked ? "bg-white" : "bg-[rgba(255,255,255,0.5)]";

   return (
      <Box className={`${color} p-2 border rounded-[5px] hover:bg-[rgba(255,255,255,0.8)]`}>
         <FormControlLabel
            name={option.name}
            control={<Checkbox onChange={(e) => setChecked(e.target.checked)} checked={checked} />}
            label={option.name}
         />
      </Box>
   );
}
