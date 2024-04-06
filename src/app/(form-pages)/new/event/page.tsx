import FormSteps from "@/app/components/general/FormSteps";
import TitleDescriptionInput from "@/app/components/general/TitleDescriptionInput";
import { Event, InfoOutlined } from "@mui/icons-material";
import { Box, TextField, Typography } from "@mui/material";

export default function Page() {
   const content = [
      <Step1 key={"step-item#1"} />,
      <Step2 key={"step-item#2"} />,
      <Step3 key={"step-item#3"} />,
      <Step4 key={"step-item#4"} />,
      <Step5 key={"step-item#5"} />,
   ];

   return (
      <form>
         <Box sx={{ mb: 3 }} className="flex flex-col items-center gap-2 justify-center">
            <Event fontSize="large" />
            <Typography variant="h3" textAlign="center">
               New Event Showcase
            </Typography>
         </Box>

         <FormSteps content={content} />
      </form>
   );
}

function Step1() {
   return (
      <>
         <div className="flex flex-col gap-5 p-5">
            <Typography sx={{ px: 2, textAlign: "center" }}>
               <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
               Tell us about this event you would like to showcase on the platform
            </Typography>
            <TextField
               variant="filled"
               size="small"
               label="Event Name"
               name="name"
               placeholder="What's the name/title of the event?"
               fullWidth
               required
               inputProps={{ min: 3, max: 80 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />
            <TextField
               variant="filled"
               size="small"
               label="Event Location"
               name="location"
               placeholder="Where is the event taking place?"
               fullWidth
               required
               inputProps={{ min: 3, max: 80 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />
            <TextField
               variant="filled"
               size="small"
               label="Event Type"
               name="event-type"
               placeholder="What type/category is the event considered?"
               fullWidth
               required
               inputProps={{ min: 3, max: 80 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />

            <TextField
               variant="filled"
               size="small"
               label="About"
               name="about"
               placeholder="What is the event all about?"
               multiline
               rows={4}
               fullWidth
               required
               inputProps={{ min: 3, max: 500 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />

            <Typography sx={{ mb: -1 }}>
               <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
               Start Date & Time
            </Typography>
            <TextField
               variant="filled"
               size="small"
               name="start-date"
               type="datetime-local"
               // label="Start Date & Time"
               fullWidth
               required
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />

            <Typography sx={{ mb: -1 }}>
               <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
               End Date & Time
            </Typography>
            <TextField
               variant="filled"
               size="small"
               name="end-date"
               type="datetime-local"
               // label="End Date & Time"
               fullWidth
               required
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />
            <TextField
               variant="filled"
               size="small"
               label="Contact Details"
               name="contact-details"
               placeholder="How do people get in touch regarding the event?"
               fullWidth
               required
               inputProps={{ min: 3, max: 100 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />
         </div>
      </>
   );
}

function Step2() {
   return (
      <div className="flex flex-col gap-5 p-5">
         <Typography sx={{ mb: -1 }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            What are some Key take-aways of the event?
         </Typography>

         <TitleDescriptionInput title="take-away" />
      </div>
   );
}

function Step3() {
   return (
      <div className="flex flex-col gap-5 p-5">
         <Typography sx={{ mb: -1 }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            Will any note-worthy hosts/guests be attending?
         </Typography>

         <TitleDescriptionInput title="host/guest" />
      </div>
   );
}

function Step4() {
   return (
      <div className="flex flex-col gap-5 p-5">
         <Typography sx={{ mb: -1 }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            Social media links for the event
         </Typography>

         <TitleDescriptionInput title="social platform" />
      </div>
   );
}

function Step5() {
   return (
      <>
         {/* <br /> images: (string | StaticImageData)[]; */}
         <div className="flex flex-col gap-5 p-5">
            <Typography sx={{ px: 2, textAlign: "center" }}>
               <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
               Now, lets upload some images of the event, if any.
            </Typography>
         </div>
      </>
   );
}
