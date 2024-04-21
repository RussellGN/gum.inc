"use client";

import images from "@/app/assets";
import useIsMobile from "@/app/hooks/useIsMobile";
import { Search, Message } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";

export default function ValuePropositionGraphic() {
   const isMobile = useIsMobile();
   const theme = useTheme();

   return (
      <Box className="h-full p-5 relative flex items-center justify-center">
         <Box className="flex py-1 justify-center w-full md:w-auto md:h-[28rem] bg-gray-200 border-gray-200 border-4 rounded-[20px]  shadow-md relative">
            <Box
               sx={{
                  position: "relative",
                  "&::before": {
                     content: "''",
                     position: "absolute",
                     top: "-10%",
                     right: "-25%",
                     transform: "rotate(6deg)",
                     zIndex: "-10",
                     backgroundColor: "primary.light",
                     height: "100%",
                     width: "100%",
                     borderRadius: "15px",
                     boxShadow: theme.shadows[5],
                  },
               }}
            >
               <Image
                  src={images.inc_user_page_screenshot}
                  alt="screenshot of a user's page on the platform"
                  className="w-full h-auto md:w-auto md:h-full rounded-[20px] shadow-lg"
               />
            </Box>

            {isMobile ? (
               <Box className={`bg-white border rounded-lg shadow-lg absolute top-[49%] right-[65%]`}>
                  <div className="py-1 px-1 border gap-1  flex flex-col items-center justify-around">
                     <Typography variant="caption" className="flex items-center gap-1">
                        <Search fontSize="inherit" />
                        <span className="whitespace-nowrap">Tax Lawyer, London</span>
                     </Typography>
                     <Typography variant="caption" className="bg-gray-100 rounded-lg px-2 whitespace-nowrap">
                        found 32
                     </Typography>
                  </div>
               </Box>
            ) : (
               <Box className="bg-white border rounded-lg shadow-lg absolute top-1/4 -left-full">
                  <div className="py-1 px-2 border gap-4 flex items-center justify-around">
                     <div className="flex items-center gap-2">
                        <Search fontSize="small" />
                        <Typography variant="subtitle1">Tax Lawyer, London</Typography>
                     </div>
                     <Typography variant="caption" className="bg-gray-200 border rounded-lg px-2">
                        found 32
                     </Typography>
                  </div>
               </Box>
            )}
            <Box className="bg-white border rounded-lg shadow-lg absolute bottom-[3rem] -right-[40%] md:-right-3/4">
               <div className="flex items-center gap-4 py-0.5 px-1.5">
                  <Image
                     src={images.person2m}
                     alt="user"
                     className="w-10 h-10 object-cover rounded-[100%] border-2 shadow-md"
                  />
                  <div className="mr-auto flex flex-col gap-0">
                     <Typography sx={{ mb: 0 }} variant="subtitle2" className="whitespace-nowrap">
                        Aaron Rhodes
                     </Typography>
                     <Typography className="whitespace-nowrap" variant="caption">
                        Tax Lawyer
                     </Typography>
                  </div>
                  {isMobile ? "" : <Message fontSize="small" />}
               </div>
            </Box>
         </Box>
      </Box>
   );
}
