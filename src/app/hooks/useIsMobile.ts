import { useMediaQuery, useTheme } from "@mui/material";

export default function useIsMobile() {
   const theme = useTheme();

   return useMediaQuery(`screen and (max-width: ${theme.breakpoints.values.md}px)`);
}
