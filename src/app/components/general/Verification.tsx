import { Verified } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function Verification({ isVerified }: { isVerified: boolean }) {
   if (isVerified)
      return (
         <Typography variant="subtitle2" className="px-2 py-[1px] w-fit rounded-lg bg-slate-100 flex items-center gap-2">
            verified
            <Verified fontSize="inherit" />
         </Typography>
      );
}
