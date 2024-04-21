import SubscriptionCard from "@/app/components/dashboard/SubscriptionCard";
import DirectoryCard from "@/app/components/general/DirectoryCard";
import ResponsiveTypography from "@/app/components/general/ResponsiveTypography";
import { directories } from "@/app/lib/constants";
import { sampleSubscriptions } from "@/app/lib/sampleData";
import { BookOutlined, Subscriptions } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function page() {
   return (
      <Box sx={{ px: { xs: 1, md: 5 }, mt: 2 }}>
         <Box sx={{ mb: 5 }}>
            <ResponsiveTypography
               mobileVariant="h4"
               desktopVariant="h3"
               className="w-fit border-b-8 pb-2 flex items-center gap-3"
               sx={{ mb: { xs: 2, md: 4 } }}
            >
               <span>Featured Directories</span>
               <BookOutlined fontSize="inherit" />
            </ResponsiveTypography>

            <Box sx={{ justifyContent: { xs: "center", md: "unset" } }} className="flex flex-wrap gap-2">
               {directories.splice(0, 3).map((dir) => (
                  <DirectoryCard key={dir.name} dir={dir} />
               ))}
            </Box>
         </Box>

         <Box sx={{ mb: 5 }}>
            <ResponsiveTypography
               mobileVariant="h4"
               desktopVariant="h3"
               className="w-fit border-b-8 pb-2 flex items-center gap-3"
               sx={{ mb: { xs: 2, md: 4 } }}
            >
               <span>Subscriptions</span>
               <Subscriptions fontSize="inherit" />
            </ResponsiveTypography>

            <Box sx={{ justifyContent: { xs: "center", md: "unset" } }} className="flex flex-wrap gap-2">
               {sampleSubscriptions.map((sub) => (
                  <SubscriptionCard key={sub.id} subscription={sub} />
               ))}
            </Box>
         </Box>
      </Box>
   );
}
