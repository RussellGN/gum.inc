import { NotificationInterface } from "@/app/interfaces";
import { getTimeElapsedSince } from "@/app/lib/utils";
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
import ResponsiveTypography from "../general/ResponsiveTypography";

export default function NotificationComponent({ notification }: { notification: NotificationInterface }) {
   return (
      <Box
         className="flex items-center gap-3 border-b"
         sx={{ backgroundColor: notification.read ? "" : "whitesmoke", p: 1 }}
      >
         <div className="flex items-start gap-1 mr-auto">
            <Typography>
               <NotificationIcon type={notification.type} otherProps={{ fontSize: "small" }} />
            </Typography>
            <div>
               <ResponsiveTypography mobileVariant="subtitle1" desktopVariant="body1">
                  {notification.title}
               </ResponsiveTypography>
               <ResponsiveTypography mobileVariant="caption" desktopVariant="subtitle2">
                  {notification.content}
               </ResponsiveTypography>
            </div>
         </div>

         <Typography variant="caption" className="whitespace-nowrap">
            {getTimeElapsedSince(notification.date)}
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
         throw new Error("No icon found for notification type: " + String(type));
   }
}
