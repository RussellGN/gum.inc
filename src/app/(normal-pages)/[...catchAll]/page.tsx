import { Home } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Page() {
   return (
      <div className="min-h-[70vh] flex items-center justify-center">
         <Typography textAlign="center">
            This page is either still in development or does not exist
            <br />
            <Button startIcon={<Home />} component={Link} href="/" sx={{ mt: 2 }}>
               Homepage
            </Button>
         </Typography>
      </div>
   );
}
