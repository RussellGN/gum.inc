import FormSteps from "@/app/components/general/FormSteps";
import ImageInput from "@/app/components/general/ImageInput";
import TitleDescriptionInput from "@/app/components/general/TitleDescriptionInput";
import { Event, InfoOutlined } from "@mui/icons-material";
import { Box, TextField, Typography } from "@mui/material";

export default function Page() {
   const content = [
      <Step1 key={"step-item#1"} />,
      <Step2 key={"step-item#2"} />,
      <Step3 key={"step-item#3"} />,
      <Step4 key={"step-item#4"} />,
   ];

   return (
      <form>
         <Box sx={{ mb: 3 }} className="flex flex-col items-center gap-2 justify-center">
            <Event fontSize="large" />
            <Typography variant="h3" textAlign="center">
               Account Details
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
               Tell us about yourself!
            </Typography>
            <TextField
               variant="filled"
               size="small"
               label="Profession"
               name="job-title"
               placeholder="What is your profession?"
               fullWidth
               required
               inputProps={{ min: 3, max: 80 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />

            <TextField
               variant="filled"
               size="small"
               label="Industry"
               name="industry"
               placeholder="In what industry do you operate?"
               fullWidth
               required
               inputProps={{ min: 3, max: 80 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />
            <TextField
               variant="filled"
               size="small"
               label="Employer, if any"
               name="works-at"
               placeholder="Where do you currently work?"
               fullWidth
               inputProps={{ min: 3, max: 80 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />
            <TextField
               variant="filled"
               size="small"
               label="Location"
               name="location"
               placeholder="Where are you located?"
               fullWidth
               required
               inputProps={{ min: 3, max: 80 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />

            <TextField
               variant="filled"
               size="small"
               label="Bio"
               name="bio"
               placeholder="Tell us more about you"
               multiline
               rows={4}
               fullWidth
               required
               inputProps={{ min: 3, max: 500 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />

            <TextField
               variant="filled"
               size="small"
               label="Contact Details"
               name="contact-details"
               placeholder="How should people get in touch?"
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
            What services / value do you offer?
         </Typography>

         <TitleDescriptionInput title="Service / Value" />
      </div>
   );
}

function Step3() {
   return (
      <div className="flex flex-col gap-5 p-5">
         <Typography sx={{ mb: -1 }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            Do you have any social media accounts?
         </Typography>

         <TitleDescriptionInput title="social platform" />
      </div>
   );
}

function Step4() {
   const imageNames = ["display-photo", "image1", "image2", "image3", "image4", "image5", "image6"];
   return (
      <>
         <div className="flex flex-col gap-5 p-5">
            <Typography sx={{ px: 2, textAlign: "center" }}>
               <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
               Now, lets upload some images of you / your work. Start with a display photo.
            </Typography>

            <div className="w-full max-w-[25rem] grid grid-cols-3 gap-2 mx-auto">
               {imageNames.map((imgName) => (
                  <div key={imgName} className={`${imgName === "display-photo" ? "col-span-3 " : ""}`}>
                     <ImageInput name={imgName} />
                  </div>
               ))}
            </div>
         </div>
      </>
   );
}
