import { gradients } from "@/app/lib/constants";
import { directory, expandSize } from "@/app/types";
import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function DirectoryCard({ dir, expand }: { dir: directory; expand: expandSize }) {
   if (expand === "minimized")
      return (
         <Box
            className="flex items-center gap-3"
            sx={{ "& svg": { color: "primary.dark", fontSize: "inherit", mt: -0.2 } }}
         >
            {dir.icon}
         </Box>
      );
   else if (expand === "normal")
      return (
         <Box
            className="border-b-[3px] flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all hover:gap-4"
            sx={{
               backgroundColor: dir.name.includes("Gummy") ? "secondary.light" : "",
               // color: dir.name.includes("Gummy") ? "white" : "",
               // "& svg": { color: dir.name.includes("Gummy") ? "inherit" : "grey", fontSize: "1.5rem", mt: -0.2 },
               "& svg": { color: "grey", fontSize: "1.5rem", mt: -0.2 },
            }}
         >
            {dir.icon}
            <Typography className="line-clamp-1 flex-grow">{dir.name}</Typography>
         </Box>
      );

   return (
      <Box className="border shadow-md rounded-lg px-2 py-3">
         <div className="text-center">{dir.icon}</div>
         <Typography variant="subtitle1" className="p-1 bg-[whitesmoke] rounded-md border">
            {dir.about}
         </Typography>
         <div>
            <Button endIcon={<ArrowRightAlt />}>Read More</Button>
         </div>
      </Box>
   );
}
