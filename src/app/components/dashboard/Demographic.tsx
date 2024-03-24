import { People } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function Demographic() {
   return (
      <Box className="shadow-lg bg-white rounded-xl border p-5 h-full">
         <Typography sx={{ mb: 2 }} variant="h3" fontWeight="bold" className="flex items-center gap-3 ">
            Demographic
            <People fontSize="inherit" />
         </Typography>
         <h5>viewers locations</h5>
         <h5>nature of viewers on platform</h5>
      </Box>
   );
}
