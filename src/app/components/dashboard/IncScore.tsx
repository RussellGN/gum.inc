import { InfoOutlined, Star } from "@mui/icons-material";
import { Box, Rating, Typography } from "@mui/material";

export default function IncScore() {
   return (
      <Box className="shadow-lg bg-white rounded-xl border p-5 h-full">
         <Typography sx={{ mb: 2 }} variant="h3" fontWeight="bold" className="flex items-center gap-3 ">
            Inc Score
            <Star fontSize="inherit" />
         </Typography>

         <Box sx={{ mb: 2 }}>
            <Typography sx={{ mb: 1 }}>
               <InfoOutlined fontSize="inherit" sx={{ mr: 1, mt: -0.2 }} />
               Your Inc score is based off your accumulated views and related activity. It is a good measure of your
               popularity on the platform.
            </Typography>

            <Rating size="large" value={3.5} readOnly precision={0.5} />
         </Box>
         {/* <div>
            <Button component={Link} href="/about#inc-score" startIcon={<InfoOutlined />}>
               About
            </Button>
         </div> */}
      </Box>
   );
}
