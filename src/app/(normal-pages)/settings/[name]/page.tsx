import { settings } from "@/app/lib/constants";
import { Typography } from "@mui/material";

export default function page({ params: { name } }: { params: { name: string } }) {
   name = decodeURIComponent(name);
   const setting = settings.find((item) => item.name === name);

   if (!setting) throw new Error(`Settings page '${name}' does not exist `);

   return (
      <div className="">
         <Typography variant="h2" sx={{ mb: 2 }}>
            {setting.name}
         </Typography>
         <div className="">{setting.content}</div>
      </div>
   );
}
