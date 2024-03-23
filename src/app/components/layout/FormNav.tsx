"use client";

import { ArrowBack, Home } from "@mui/icons-material";
import { Box, Button, IconButton, SxProps } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function FormNav({ sx }: { sx?: SxProps }) {
   const router = useRouter();

   return (
      <Box sx={sx} className="flex items-center gap-2">
         <Button onClick={() => router.back()} startIcon={<ArrowBack />}>
            Back
         </Button>
         <IconButton size="small" component={Link} href="/">
            <Home />
         </IconButton>
      </Box>
   );
}
