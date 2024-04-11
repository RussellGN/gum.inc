"use client";

import { option } from "@/app/types";
import { Box, Checkbox, FormControlLabel, SxProps } from "@mui/material";

type propTypes = {
   option: option & { checked: boolean };
   toggleOptionCheckedState: (optionName: string) => void;
   small?: boolean;
};

export default function OptionCard({ option, toggleOptionCheckedState, small }: propTypes) {
   const sx: SxProps = small
      ? {
           px: 1,
           py: 0,
           color: option.checked ? "white" : "",
           backgroundColor: option.checked ? "primary.light" : "white",
           "&:hover": { backgroundColor: "primary.light", color: "white" },
        }
      : {
           px: 2,
           py: 0.5,
           color: option.checked ? "white" : "",
           backgroundColor: option.checked ? "primary.light" : "white",
           "&:hover": { backgroundColor: "primary.light", color: "white" },
        };
   return (
      <Box className="border shadow-sm rounded-[15px] transition-all" sx={sx}>
         <FormControlLabel
            name={option.name}
            control={
               <Checkbox color="default" onChange={() => toggleOptionCheckedState(option.name)} checked={option.checked} />
            }
            label={option.name}
         />
      </Box>
   );
}
