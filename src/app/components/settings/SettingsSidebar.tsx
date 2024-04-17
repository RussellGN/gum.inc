import { Box, Typography } from "@mui/material";
import GoBackBtn from "../general/GoBackBtn";
import Link from "next/link";
import { settings } from "@/app/lib/constants";

export default function SettingsSidebar() {
   return (
      <Box className="h-[80vh] overflow-y-auto border rounded-[15px] bg-white px-4 py-8 sticky top-[100px]">
         <div className="flex items-center justify-between gap-2">
            <GoBackBtn noMarginBottom />
            <Typography variant="h5">Settings</Typography>
         </div>

         <Box sx={{ mt: 3 }}>
            {settings.map((setting) => (
               <Box
                  key={setting.name}
                  component={Link}
                  href={`/settings/${setting.name}`}
                  className="border-b-2 flex items-center gap-3 py-2 px-1 hover:bg-slate-50"
               >
                  <div className="w-8 h-8 flex items-center justify-center">{setting.icon}</div>
                  <Typography>{setting.name}</Typography>
               </Box>
            ))}
         </Box>
      </Box>
   );
}
