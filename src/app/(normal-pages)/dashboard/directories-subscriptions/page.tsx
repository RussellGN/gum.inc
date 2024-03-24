import SubscriptionCard from "@/app/components/dashboard/SubscriptionCard";
import { directories } from "@/app/lib/constants";
import { sampleSubscriptions } from "@/app/lib/sampleData";
import { BookOutlined, Subscriptions } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function page() {
   return (
      <Box sx={{ p: 3 }}>
         <Box sx={{ mb: 4 }}>
            <Typography variant="h3" sx={{ mb: 2 }} className="flex items-center gap-3">
               <span>Featured Directories</span>
               <BookOutlined fontSize="inherit" />
            </Typography>

            <div className="bg-white p-3 rounded-lg border flex gap-3 overflow-x-auto">
               {directories.splice(0, 3).map((dir) => (
                  <Box
                     component={Link}
                     href={`/inc-connect?dir=${dir.name}`}
                     key={dir.name}
                     className="w-[10rem] min-w-[10rem] bg-slate-100 p-2 rounded-xl flex flex-col items-center justify-center gap-2 border-2 border-[transparent] transition-all hover:border-slate-300"
                  >
                     {dir.icon}
                     <Typography noWrap className="w-full text-center ">
                        {dir.name}
                     </Typography>
                     <Typography variant="subtitle2" className="line-clamp-3 bg-white p-1 rounded-md w-full text-center ">
                        {dir.about}
                     </Typography>
                  </Box>
               ))}
            </div>
         </Box>

         <Box>
            <Typography variant="h3" sx={{ mb: 2 }} className="flex items-center gap-3">
               <span>Subscriptions</span>
               <Subscriptions fontSize="inherit" />
            </Typography>

            <div className="bg-white p-3 rounded-lg border flex gap-3 overflow-x-auto">
               {sampleSubscriptions.map((sub) => (
                  <SubscriptionCard key={sub.id} subscription={sub} />
               ))}
            </div>
         </Box>
      </Box>
   );
}
