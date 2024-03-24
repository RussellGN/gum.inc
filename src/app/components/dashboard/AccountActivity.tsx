import { sampleNotifications } from "@/app/lib/sampleData";
import { Notifications } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import NotificationComponent from "./NotificationComponent";

export default function AccountActivity() {
   return (
      <Box className="shadow-lg bg-white rounded-xl border p-5 h-full">
         <Typography sx={{ mb: 2 }} variant="h3" fontWeight="bold" className="flex items-center gap-3 ">
            Activity
            <Notifications fontSize="inherit" />
         </Typography>

         <div className="border rounded-lg max-h-[15rem] overflow-y-auto">
            {sampleNotifications.map((notif) => (
               <NotificationComponent key={notif.id} notification={notif} />
            ))}
         </div>
      </Box>
   );
}
