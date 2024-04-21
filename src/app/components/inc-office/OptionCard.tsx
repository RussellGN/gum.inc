"use client";

import useIsMobile from "@/app/hooks/useIsMobile";
import { option } from "@/app/types";
import { Box, Checkbox, FormControlLabel, SxProps } from "@mui/material";
import ResponsiveTypography from "../general/ResponsiveTypography";

type propTypes = {
   option: option & { checked: boolean };
   toggleOptionCheckedState: (optionName: string) => void;
   small?: boolean;
};

export default function OptionCard({ option, toggleOptionCheckedState, small }: propTypes) {
   const isMobile = useIsMobile();
   const sx: SxProps = small
      ? {
           borderRadius: "12px",
           px: 1,
           py: 0,
           color: option.checked ? "white" : "",
           backgroundColor: option.checked ? "primary.light" : "white",
           "&:hover": { backgroundColor: "primary.light", color: "white" },
        }
      : {
           borderRadius: "30px",
           px: 2,
           py: 0.5,
           color: option.checked ? "white" : "",
           backgroundColor: option.checked ? "primary.light" : "white",
           "&:hover": { backgroundColor: "primary.light", color: "white" },
        };
   return (
      <Box className="border shadow-sm transition-all" sx={sx}>
         <FormControlLabel
            name={option.name}
            control={
               <Checkbox
                  color="default"
                  onChange={() => toggleOptionCheckedState(option.name)}
                  checked={option.checked}
                  size={isMobile || small ? "small" : "medium"}
               />
            }
            label={
               <ResponsiveTypography mobileVariant="caption" desktopVariant="body1">
                  {option.name}
               </ResponsiveTypography>
            }
         />
      </Box>
   );
}
