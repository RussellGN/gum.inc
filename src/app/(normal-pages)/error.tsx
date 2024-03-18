"use client";

import { WarningOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
   return (
      <div className="min-h-[70vh] flex items-center justify-center">
         <Typography textAlign="center">
            <WarningOutlined fontSize="inherit" sx={{ mr: 0.5, mt: -0.2 }} />
            There was an error
            <br /> <strong>{error.message}</strong> <br />
            <Button onClick={reset} sx={{ mt: 2 }}>
               Retry
            </Button>
         </Typography>
      </div>
   );
}
