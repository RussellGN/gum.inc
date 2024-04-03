import GoBackBtn from "@/app/components/general/GoBackBtn";
import { Home } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Page() {
   return (
      <div className="min-h-[70vh] flex flex-col gap-3 items-center justify-center">
         <Typography textAlign="center">This page is either still in development or does not exist</Typography>
         <div className="flex items-center justify-center gap-3">
            <GoBackBtn noMarginBottom />
            <Button color="primary" startIcon={<Home />} component={Link} href="/">
               Homepage
            </Button>
         </div>
      </div>
   );
}
