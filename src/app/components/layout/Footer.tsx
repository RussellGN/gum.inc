"use client";

import { ArrowUpward } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";

export default function Footer() {
   return (
      <Container sx={{ mt: "auto" }}>
         <Box
            component="footer"
            sx={{
               my: 3,
               borderTop: "solid",
               borderColor: "divider",
               display: "flex",
               alignItems: "center",
               justifyContent: "space-between",
               p: { xs: 2, sm: 4 },
            }}
         >
            <Typography variant="body2">All Rights Reserved. &copy;GUM.INC {new Date().getFullYear()}</Typography>
            <IconButton title="Back to top" size="small" onClick={() => window.scrollTo(0, 0)}>
               <ArrowUpward />
            </IconButton>
         </Box>
      </Container>
   );
}
