import { Apple, Facebook, Google } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function AuthProviders() {
   return (
      <div className="flex items-center justify-center gap-4">
         <IconButton sx={{ backgroundColor: "white" }}>
            <Google />
         </IconButton>
         <IconButton sx={{ backgroundColor: "white" }}>
            <Apple />
         </IconButton>
         <IconButton sx={{ backgroundColor: "white" }}>
            <Facebook />
         </IconButton>
      </div>
   );
}
