"use client";

import useIsMobile from "@/app/hooks/useIsMobile";
import { gradients } from "@/app/lib/constants";
import { Mail } from "@mui/icons-material";
import { Badge, Box } from "@mui/material";

export default function GridItem3() {
   const isMobile = useIsMobile();

   return (
      <Box
         sx={{ background: gradients.primary1 }}
         className="text-white col-span-1 row-span-1 flex items-center border rounded-[10px] shadow-md  p-1"
      >
         <Box className="p-2 flex items-center justify-center rounded-md h-full">
            <Badge badgeContent={4} color="success">
               <Mail fontSize={isMobile ? "medium" : "large"} />
            </Badge>
         </Box>
      </Box>
   );
}
