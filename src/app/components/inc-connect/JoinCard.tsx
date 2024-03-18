import { primaryColor, secondaryColor } from "@/app/lib/constants";
import { AddCircleOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function JoinCard({ directory }: { directory: string }) {
   return (
      <Box
         className="border-[10px] border-double border-white rounded-[15px]"
         sx={{ background: `linear-gradient(to bottom right, ${primaryColor}, goldenrod)` }}
      >
         <Box className="p-3 h-full flex flex-col text-white items-center justify-center gap-3">
            <AddCircleOutlined fontSize="large" />
            <Typography fontWeight="bold" noWrap>
               Join {directory}
            </Typography>
         </Box>
      </Box>
   );
}
