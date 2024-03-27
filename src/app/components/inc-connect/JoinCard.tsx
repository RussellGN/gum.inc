import { gradients } from "@/app/lib/constants";
import { AddCircleOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function JoinCard({ directory }: { directory: string }) {
   return (
      <Box
         component={Link}
         href="/join"
         className="border-4 border-[whitesmoke] rounded-[15px] transition-all  hover:border-slate-400"
         sx={{ background: gradients.secondary1 }}
      >
         <Box className="p-3 h-full flex flex-col text-white items-center justify-center gap-3">
            <AddCircleOutlined fontSize="large" />
            <Typography variant="h4" textAlign="center">
               Join {directory}
            </Typography>
         </Box>
      </Box>
   );
}
