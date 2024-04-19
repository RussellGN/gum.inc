"use client";

import { DirectoryInterface } from "@/app/interfaces";
import { gradients } from "@/app/lib/constants";
import { capitalizeWords } from "@/app/lib/utils";
import { AddCircleOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function JoinCard({ dir }: { dir: DirectoryInterface }) {
   let text = "";
   if (dir.itemToBeListed.toLowerCase().trim().startsWith("yourself"))
      text = `Get ${capitalizeWords(dir.itemToBeListed)} Listed`;
   else text = `Get Your ${dir.itemToBeListed} Listed`;

   return (
      <Box
         component={Link}
         // href={"/join/" + dir.name}
         href={"/signup"}
         className="border-4 border-[whitesmoke] rounded-[15px] transition-all  hover:border-slate-400"
         sx={{ background: gradients.secondary1 }}
      >
         <Box className="p-3 h-full flex flex-col text-white items-center justify-center gap-3">
            <AddCircleOutlined fontSize="large" />
            <Typography variant="h4" textAlign="center">
               {text}
            </Typography>
         </Box>
      </Box>
   );
}
