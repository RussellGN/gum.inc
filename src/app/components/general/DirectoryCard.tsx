import { DirectoryInterface } from "@/app/interfaces";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function DirectoryCard({ dir, simplified }: { dir: DirectoryInterface; simplified?: boolean }) {
   return (
      <Box
         component={Link}
         href={`/inc-connect?dir=${dir.name}`}
         className={`${
            simplified ? "w-full" : "w-[15rem]"
         } bg-white p-4 rounded-xl flex flex-col items-center justify-center gap-2 border transition-all hover:bg-slate-50`}
      >
         {dir.icon}
         <Typography noWrap className="w-full text-center ">
            {dir.name}
         </Typography>
         {simplified ? (
            ""
         ) : (
            <Typography
               variant="subtitle2"
               className="h-[6rem] overflow-y-auto bg-[whitesmoke] p-2 rounded-md w-full text-center "
            >
               {dir.about}
            </Typography>
         )}
      </Box>
   );
}
