import SubscriptionCard from "@/app/components/dashboard/SubscriptionCard";
import DirectoryCard from "@/app/components/general/DirectoryCard";
import { directories } from "@/app/lib/constants";
import { sampleSubscriptions } from "@/app/lib/sampleData";
import { BookOutlined, Subscriptions } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function page() {
   return (
      <Box sx={{ p: 3 }}>
         <Box sx={{ mb: 4 }}>
            <Typography variant="h3" className="w-fit border-b-8 pb-2 flex items-center gap-3" sx={{ mb: 4 }}>
               <span>Featured Directories</span>
               <BookOutlined fontSize="inherit" />
            </Typography>

            {/* <div className="bg-white p-3 rounded-lg border flex gap-3 overflow-x-auto"> */}
            <div className="p-3 flex gap-3 overflow-x-auto">
               {directories.splice(0, 3).map((dir) => (
                  <DirectoryCard key={dir.name} dir={dir} />
               ))}
            </div>
         </Box>

         <Box>
            <Typography variant="h3" className="w-fit border-b-8 pb-2 flex items-center gap-3" sx={{ mb: 4 }}>
               <span>Subscriptions</span>
               <Subscriptions fontSize="inherit" />
            </Typography>

            {/* <div className="bg-white p-3 rounded-lg border flex gap-3 overflow-x-auto"> */}
            <div className="p-3 flex gap-3 overflow-x-auto">
               {sampleSubscriptions.map((sub) => (
                  <SubscriptionCard key={sub.id} subscription={sub} />
               ))}
            </div>
         </Box>
      </Box>
   );
}
