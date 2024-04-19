import { gradients } from "@/app/lib/constants";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function Logo() {
   return (
      <Typography
         component={Link}
         href="/"
         color="primary"
         variant="h3"
         sx={{
            position: "relative",
            display: "inline-block",
            background: gradients.primary1,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bolder",
         }}
      >
         GUM.INC
      </Typography>
   );
}
