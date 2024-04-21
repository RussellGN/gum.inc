"use client";

import { researchBureauOptions } from "@/app/lib/constants";
import { ArrowRightAlt, DoneAll, RemoveDone } from "@mui/icons-material";
import { Button, FormGroup, Box } from "@mui/material";
import { useState } from "react";
import OptionCard from "./OptionCard";
import NewsletterDialog from "./NewsletterDialog";
import useIsMobile from "@/app/hooks/useIsMobile";

export default function ResearchBureauNewsletterForm() {
   const [showDialog, setShowDialog] = useState(false);
   const [options, setOptions] = useState(() => researchBureauOptions.map((option) => ({ ...option, checked: false })));
   const selectedOptions = options.filter((option) => option.checked);
   const isMobile = useIsMobile();

   function handleOpen() {
      setShowDialog(true);
   }
   function handleClose() {
      setShowDialog(false);
   }

   const numberOfoptionsSelected: number = options.filter((option) => option.checked).length;
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
      <>
         <NewsletterDialog
            options={selectedOptions}
            toggleOptionCheckedState={toggleOptionCheckedState}
            open={showDialog}
            handleClose={handleClose}
         />

         <div>
            <div className="flex gap-3">
               <Button
                  disabled={numberOfoptionsSelected < 3}
                  type="button"
                  onClick={handleOpen}
                  color="success"
                  size={isMobile ? "small" : "medium"}
                  endIcon={<ArrowRightAlt />}
               >
                  Proceed
               </Button>
               <Button
                  onClick={toggleAllOptions}
                  color="success"
                  size={isMobile ? "small" : "medium"}
                  variant="outlined"
                  endIcon={isAllSelected ? <RemoveDone /> : <DoneAll />}
               >
                  {isAllSelected ? "Unselect all" : "Select all"}
               </Button>
            </div>

            <Box sx={{ mt: 2.5 }}>
               <FormGroup sx={{ pb: 2 }} className="">
                  <Box sx={{ gap: { xs: 0.8, md: 2 } }} className="flex flex-row flex-wrap ">
                     {options.map((option) => (
                        <OptionCard
                           small={isMobile}
                           key={option.name}
                           option={option}
                           toggleOptionCheckedState={toggleOptionCheckedState}
                        />
                     ))}
                  </Box>
               </FormGroup>
            </Box>
         </div>
      </>
   );
}
