import { Typography } from "@mui/material";
import Link from "next/link";

export default function Logo() {
   return (
      <Typography component={Link} href="/" color="primary" variant="body1">
         GUM.INC
      </Typography>
   );
}
