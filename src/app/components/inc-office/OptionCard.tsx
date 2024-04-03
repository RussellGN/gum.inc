"use client";

import { option } from "@/app/types";
import { Box, Checkbox, FormControlLabel } from "@mui/material";

type propTypes = {
   option: option & { checked: boolean };
   toggleOptionCheckedState: (optionName: string) => void;
};

export default function OptionCard({ option, toggleOptionCheckedState }: propTypes) {
   return (
      <Box
         className="border shadow-md rounded-[15px] transition-all"
         sx={{
            px: 2,
            py: 0.5,
            color: option.checked ? "white" : "",
            backgroundColor: option.checked ? "primary.light" : "white",
            "&:hover": { backgroundColor: "primary.light", color: "white" },
         }}
      >
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
