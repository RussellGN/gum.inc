import { stat } from "@/app/types";
import { Bookmark, Search, VisibilitySharp } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";

export default function Statistics() {
   return (
      <>
         {statistics.map((statItem) => (
            <Grid item xs={12} md={4} key={statItem.name}>
               <StatCard statistic={statItem} />
            </Grid>
         ))}
      </>
   );
}

const statistics: stat[] = [
   {
      name: "Views",
      value: "2k",
      icon: <VisibilitySharp fontSize="large" color="primary" />,
   },
   {
      name: "Search Appearances",
      value: "42k",
      icon: <Search fontSize="large" color="primary" />,
   },
   {
      name: "Bookmarked",
      value: "455 times",
      icon: <Bookmark fontSize="large" color="primary" />,
   },
];

export function StatCard({ statistic }: { statistic: stat }) {
   return (
      <Box className="shadow-lg bg-white rounded-xl border p-5 flex items-center justify-between gap-3">
         <div>
            <Typography sx={{ mb: 1 }} fontWeight="bold" className="flex items-center  gap-2 ">
               {statistic.name}
            </Typography>
            <Typography>{statistic.value}</Typography>
         </div>
         {statistic.icon}
      </Box>
   );
}
