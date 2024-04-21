"use client";

import { gradients } from "@/app/lib/constants";
import { ArrowRightAlt } from "@mui/icons-material";
import { Button, styled } from "@mui/material";
import { ReactNode, useState } from "react";

type propTypes = { content: ReactNode[]; submitButtonIcon?: ReactNode; submitButtonText?: string; contentHeight?: string };

export default function FormSteps({ content, submitButtonIcon, submitButtonText, contentHeight = "40vh" }: propTypes) {
   const [step, setStep] = useState(0);
   const isLastStep = step === content.length - 1;

   return (
      <>
         <div className="flex gap-2 items-center justify-center overflow-x-auto">
            {content.map((_, index) => (
               <StyledButton
                  type="button"
                  onClick={() => setStep(index)}
                  key={"step-number-" + index}
                  className={`border w-9 h-9 flex items-center justify-center rounded-[20px] ${
                     index === step ? "text-white" : "hover:bg-slate-50"
                  } `}
                  sx={{
                     background: index === step ? gradients.primary1 : "white",
                     "&:after": {
                        display: index !== content.length - 1 ? "block" : "none",
                        position: "absolute",
                        content: "''",
                        top: "50%",
                        left: "100%",
                        transform: "translateY(-50%)",
                        width: "0.5rem",
                        height: "5px",
                        background: gradients.primary1,
                     },
                  }}
               >
                  {index + 1}
               </StyledButton>
            ))}
         </div>

         <div className={`min-h-[${contentHeight}]`}>
            {content.map((node, index) => (
               <div key={"step" + index} className={index === step ? "" : "hidden"}>
                  {node}
               </div>
            ))}
         </div>

         <div className="mt-6 flex gap-3 items-center justify-between">
            <Button
               onClick={() => setStep((prev) => prev - 1)}
               type="button"
               variant="outlined"
               color="primary"
               disabled={step === 0}
            >
               Prev
            </Button>

            <Button
               sx={isLastStep ? { display: "none" } : {}}
               onClick={() => setStep((prev) => prev + 1)}
               type="button"
               color="primary"
            >
               Next
            </Button>
            <Button
               endIcon={submitButtonIcon || <ArrowRightAlt />}
               sx={!isLastStep ? { display: "none" } : {}}
               type="submit"
               variant="contained"
               color="primary"
            >
               {submitButtonText || "Finish"}
            </Button>
         </div>
      </>
   );
}

const StyledButton = styled("button")({
   position: "relative",
});
