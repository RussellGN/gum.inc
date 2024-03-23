import { Apple, Facebook, Google } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import Link from "next/link";

export default function AuthProviders() {
   return (
      <div className="flex items-center justify-center gap-4">
         <IconButton component={Link} href="/dashboard" sx={{ backgroundColor: "white" }}>
            <Google />
         </IconButton>
         <IconButton component={Link} href="/account-details" sx={{ backgroundColor: "white" }}>
            <Apple />
         </IconButton>
         <IconButton sx={{ backgroundColor: "white" }}>
            <Facebook />
         </IconButton>
      </div>
   );
}
