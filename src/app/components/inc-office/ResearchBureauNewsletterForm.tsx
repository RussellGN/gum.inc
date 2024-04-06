"use client";

import { researchBureauOptions } from "@/app/lib/constants";
import { ArrowRightAlt, DoneAll, RemoveDone } from "@mui/icons-material";
import { Button, FormGroup, Box } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import OptionCard from "./OptionCard";

export default function ResearchBureauNewsletterForm() {
   const [options, setOptions] = useState(() => researchBureauOptions.map((option) => ({ ...option, checked: false })));

   const numberOfoptionsSelected = options.filter((option) => option.checked).length;
   const isAllSelected = options.length === numberOfoptionsSelected;

   function toggleOptionCheckedState(optionName: string) {
      const newOptions = [...options];
      newOptions.forEach((option, index) => {
         if (option.name === optionName) {
            newOptions[index].checked = !option.checked;
         }
      });
      setOptions(newOptions);
   }

   function toggleAllOptions() {
      const newOptions = [...options];
      if (isAllSelected) {
         newOptions.forEach((option) => {
            option.checked = false;
         });
      } else {
         newOptions.forEach((option) => {
            option.checked = true;
         });
      }
      setOptions(newOptions);
   }

   return (
      <form>
         <div className="flex gap-3">
            <Button
               disabled={numberOfoptionsSelected < 3}
               type="submit"
               color="success"
               component={Link}
               href="/subscribe"
               size="medium"
               endIcon={<ArrowRightAlt />}
            >
               Proceed
            </Button>
            <Button
               onClick={toggleAllOptions}
               color="success"
               size="medium"
               variant="outlined"
               endIcon={isAllSelected ? <RemoveDone /> : <DoneAll />}
            >
               {isAllSelected ? "Unselect all" : "Select all"}
            </Button>
         </div>

         <Box sx={{ mt: 2.5 }}>
            <FormGroup sx={{ pb: 2 }} className="">
               <div className="flex flex-row flex-wrap gap-3">
                  {options.map((option) => (
                     <OptionCard key={option.name} option={option} toggleOptionCheckedState={toggleOptionCheckedState} />
                  ))}
               </div>
            </FormGroup>
         </Box>
      </form>
   );
}