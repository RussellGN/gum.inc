"use client";

import { Box, Dialog, FormGroup, Grid, IconButton, TextField, Typography } from "@mui/material";
import { AddCard, Close, InfoOutlined } from "@mui/icons-material";
import FormSteps from "../general/FormSteps";
import OptionCard from "./OptionCard";
import { option } from "@/app/types";

type propTypes = {
   open: boolean;
   handleClose: () => void;
   toggleOptionCheckedState: (optionName: string) => void;
   options: (option & { checked: boolean })[];
};

export default function NewsletterDialog({ open, handleClose, toggleOptionCheckedState, options }: propTypes) {
   const content = [
      <Step1 key="inc-office-step-1" />,
      <Step2 key="inc-office-step-2" />,
      <Step3 key="inc-office-step-3" />,
      <Step4 key="inc-office-step-4" toggleOptionCheckedState={toggleOptionCheckedState} options={options} />,
   ];

   return (
      <>
         <Dialog
            PaperProps={{
               sx: { borderRadius: "20px" },
            }}
            fullWidth
            maxWidth="md"
            open={open}
            onClose={handleClose}
         >
            <Box className="min-h-[90vh] py-5">
               <div className="text-right mb-3 w-full p-3 ">
                  <IconButton size="small" onClick={handleClose} type="button">
                     <Close />
                  </IconButton>
               </div>

               <form className="max-w-[35rem] mx-auto p-3">
                  <FormSteps
                     content={content}
                     contentHeight="60vh"
                     submitButtonIcon={<AddCard />}
                     submitButtonText={"Proceed To Payment"}
                  />
               </form>
            </Box>
         </Dialog>
      </>
   );
}

function Step1() {
   return (
      <div className="flex flex-col gap-5 py-4 px-3 md:py-5 md:px-5 mt-3 text-center">
         <Typography variant="h3" sx={{ px: 2, textAlign: "center" }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            Before proceeding, please take note...
         </Typography>
         <Typography>
            To tailor our Research Bureau Newsletter specifically to your business needs, we invite you to provide some key
            information. Your input ensures that our content is relevant and valuable to your industry.{" "}
         </Typography>
         <Typography>
            Kindly complete the form with details about your business. Your insights matter, and we&apos;re excited to
            deliver content that aligns with your business goals.{" "}
         </Typography>
      </div>
   );
}

function Step2() {
   return (
      <div className="flex flex-col gap-5 py-4 px-3 md:py-5 md:px-5 mt-3">
         <Typography variant="h3" sx={{ px: 2, textAlign: "center" }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            Business Information
         </Typography>

         <Typography sx={{ mb: -1 }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            What is your company&apos;s name?
         </Typography>
         <TextField
            variant="filled"
            size="small"
            label="Company Name"
            name="company-name"
            fullWidth
            required
            inputProps={{ min: 3, max: 80 }}
            sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
         />

         <Typography sx={{ mb: -1 }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            What is your company&apos;s email address?
         </Typography>
         <TextField
            variant="filled"
            size="small"
            label="Business Email"
            name="business-email"
            type="email"
            fullWidth
            required
            inputProps={{ min: 3, max: 80 }}
            sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
         />

         <Typography sx={{ mb: -1 }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            How else can we get in touch?
         </Typography>
         <TextField
            variant="filled"
            size="small"
            label="Contact Details"
            name="contact-details"
            fullWidth
            multiline
            rows={3}
            required
            inputProps={{ min: 3, max: 80 }}
            sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
         />
      </div>
   );
}

function Step3() {
   return (
      <div className="flex flex-col gap-5 py-4 px-3 md:py-5 md:px-5 mt-3">
         <Typography variant="h3" sx={{ px: 2, textAlign: "center" }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            Business Information & Queries
         </Typography>

         <Typography sx={{ mb: -1 }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            In what industry does your company operate?
         </Typography>
         <TextField
            variant="filled"
            size="small"
            label="Industry Sector"
            name="industry"
            fullWidth
            required
            inputProps={{ min: 3, max: 80 }}
            sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
         />

         <Typography sx={{ mb: -1 }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            What are your company&apos;s aims and objectives?
         </Typography>
         <TextField
            variant="filled"
            size="small"
            label="Aims and Objectives"
            name="aims-objectives"
            fullWidth
            multiline
            rows={3}
            required
            inputProps={{ min: 3, max: 500 }}
            sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
         />

         <Typography sx={{ mb: -1 }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            Do you have any questions or concerns?
         </Typography>
         <TextField
            variant="filled"
            size="small"
            label="Queries"
            name="queries"
            fullWidth
            multiline
            rows={3}
            required
            inputProps={{ min: 3, max: 500 }}
            sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
         />
      </div>
   );
}

function Step4({
   toggleOptionCheckedState,
   options,
}: {
   toggleOptionCheckedState: (optionName: string) => void;
   options: (option & { checked: boolean })[];
}) {
   return (
      <div className="flex flex-col gap-5 py-4 px-3 md:py-5 md:px-5 mt-3">
         <Typography variant="h3" sx={{ px: 2, textAlign: "center" }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            Payment and Confirmation
         </Typography>

         <Grid container spacing={2} alignItems="center" sx={{ mb: 1 }}>
            <Grid item xs>
               <Typography className="flex-grow">
                  You have opted for the following areas of interest. <b>Total - £20</b>
               </Typography>
            </Grid>
            {/* <Grid item xs="auto">
               <Button size="large" endIcon={<AddCard />}>
                  Make payment
               </Button>
            </Grid> */}
         </Grid>
         <FormGroup sx={{ pb: 2 }} className="">
            <div className="flex flex-row max-h-[40vh] overflow-y-auto flex-wrap gap-1">
               {options.map((option) => (
                  <OptionCard small key={option.name} option={option} toggleOptionCheckedState={toggleOptionCheckedState} />
               ))}
            </div>
         </FormGroup>
      </div>
   );
}
