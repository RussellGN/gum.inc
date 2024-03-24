import { NotificationInterface } from "@/app/interfaces";
import { notificationType } from "@/app/types";
import {
   Announcement,
   AutoModeSharp,
   Book,
   Bookmark,
   InfoOutlined,
   Pages,
   Person,
   Search,
   VisibilitySharp,
} from "@mui/icons-material";
import { Box, SxProps, Typography } from "@mui/material";

export default function NotificationComponent({ notification }: { notification: NotificationInterface }) {
   return (
      <Box
         className="flex items-center gap-3 border-b p-1.5"
         sx={{ backgroundColor: notification.read ? "" : "whitesmoke" }}
      >
         <div className="mr-auto ">
            <div className="flex items-start gap-2">
               <Typography>
                  <NotificationIcon type={notification.type} otherProps={{ fontSize: "inherit" }} />
               </Typography>
               <div>
                  <Typography> {notification.title}</Typography>
                  <Typography variant="subtitle2">{notification.content}</Typography>
               </div>
            </div>
         </div>

         <Typography component="p" variant="caption">
            {new Date(notification.date).toLocaleDateString()}
         </Typography>
      </Box>
   );
}

function NotificationIcon({ type, sx, otherProps }: { type: notificationType; sx?: SxProps; otherProps?: object }) {
   switch (type) {
      case "account":
         return <Person sx={sx} {...otherProps} />;
      case "announcement":
         return <Announcement sx={sx} {...otherProps} />;
      case "directory":
         return <Book sx={sx} {...otherProps} />;
      case "general":
         return <InfoOutlined sx={sx} {...otherProps} />;
      case "page":
         return <Pages sx={sx} {...otherProps} />;
      case "revisit":
         return <AutoModeSharp sx={sx} {...otherProps} />;
      case "saved":
         return <Bookmark sx={sx} {...otherProps} />;
      case "search-appearance":
         return <Search sx={sx} {...otherProps} />;
      case "view":
         return <VisibilitySharp sx={sx} {...otherProps} />;
      default:
         throw new Error("No icon forund for notification type: " + type);
   }
}
