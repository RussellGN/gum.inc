"use client";

import { ArrowBack } from "@mui/icons-material";
import { Button, SxProps } from "@mui/material";
import { useRouter } from "next/navigation";

export default function GoBackBtn({ sx, noMarginBottom }: { sx?: SxProps; noMarginBottom?: boolean }) {
   const router = useRouter();

   return (
      <Button
         onClick={() => router.back()}
         color="primary"
         variant="outlined"
         sx={{ ...sx, mb: noMarginBottom ? 0 : 3 }}
         startIcon={<ArrowBack />}
      >
         Go Back
      </Button>
   );
}
