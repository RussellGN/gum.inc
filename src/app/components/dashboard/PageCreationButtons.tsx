"use client";

import useIsMobile from "@/app/hooks/useIsMobile";
import { Business, EventAvailable } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import Link from "next/link";

export default function PageCreationButtons() {
   const isMobile = useIsMobile();

   return (
      <Box sx={{ justifyContent: { xs: "center", md: "flex-end" } }} className="flex gap-3 items-center mb-4 ">
         <Button size="medium" component={Link} href="/new/event" endIcon={<EventAvailable />}>
            {isMobile ? "New Event" : "Create Event Page"}
         </Button>
         <Button size="medium" component={Link} href="/new/organization" endIcon={<Business />}>
            {isMobile ? "New Organisation" : "Create Organisation Page"}
         </Button>
      </Box>
   );
}
