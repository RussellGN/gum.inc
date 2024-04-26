import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

export default function IsMobileGrid({ children }: PropsWithChildren) {
   return (
      <Box
         sx={{
            display: "grid",
            gap: { xs: "0.25rem", sm: "0.5rem" },
            gridTemplateColumns: {
               xs: "repeat(2, minmax(0, 1fr))",
               sm: "repeat(4, minmax(0, 1fr))",
               md: "repeat(5, minmax(0, 1fr))",
            },
         }}
      >
         {children}
      </Box>
   );
}
