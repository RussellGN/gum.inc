import { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { gradients } from "../lib/constants";
import FormNav from "../components/layout/FormNav";

export default function Layout({ children }: PropsWithChildren) {
   return (
      <Box
         component="main"
         className="min-h-[101vh] flex items-center justify-center"
         sx={{
            px: { xs: 2, sm: 3 },
            py: 4,
            background: gradients.secondary1,
         }}
      >
         <Box
            className="bg-[whitesmoke] rounded-[15px] shadow-2xl border max-w-[35rem] flex flex-col justify-between w-full min-h-[60vh]"
            sx={{ py: 5, px: { xs: 2, md: 5 } }}
         >
            <FormNav />
            <div className="flex-grow mt-10">{children}</div>
         </Box>
      </Box>
   );
}
