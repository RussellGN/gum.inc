"use client";

import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function GoBackBtn() {
   const router = useRouter();

   return (
      <Button
         onClick={() => router.back()}
         // size="large"
         // sx={{ border: "solid thin", borderColor: "divider", px: 3, mb: 3 }}
         color="primary"
         variant="outlined"
         sx={{ mb: 3 }}
         startIcon={<ArrowBack />}
      >
         Go Back
      </Button>
   );
}
