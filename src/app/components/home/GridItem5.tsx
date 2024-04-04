import { directories } from "@/app/lib/constants";
import { Box, Typography } from "@mui/material";

export default function GridItem5() {
   return (
      <div className="bg-white col-span-4 row-span-2 flex items-center border rounded-md shadow-md p-1">
         <Box id="slide1" className="p-2 flex flex-nowrap overflow-x-hidden">
            <div className="marquee h-full flex gap-1">
               {directories.map((dir) => (
                  <Box
                     key={"marquee-1-" + dir.name}
                     sx={{
                        "& svg": {
                           borderRadius: "100%",
                           border: "solid 2px",
                           boxSizing: "content-box",
                           p: 1,
                           color: "secondary.dark",
                        },
                     }}
                     className="flex flex-col items-center text-center justify-center gap-2"
                  >
                     {dir.icon}
                     <Typography noWrap className="w-[7rem] " variant="subtitle2">
                        {dir.name}
                     </Typography>
                  </Box>
               ))}
            </div>

            <div className="marquee h-full flex gap-1">
               {directories.map((dir) => (
                  <Box
                     key={"marquee-2-" + dir.name}
                     sx={{
                        "& svg": {
                           borderRadius: "100%",
                           border: "solid 2px",
                           boxSizing: "content-box",
                           p: 1,
                           color: "secondary.dark",
                        },
                     }}
                     className="flex flex-col items-center text-center justify-center gap-2"
                  >
                     {dir.icon}
                     <Typography noWrap className="w-[7rem] " variant="subtitle2">
                        {dir.name}
                     </Typography>
                  </Box>
               ))}
            </div>
         </Box>
      </div>
   );
}
