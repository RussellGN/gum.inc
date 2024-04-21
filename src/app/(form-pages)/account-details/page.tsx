import FormSteps from "@/app/components/general/FormSteps";
import ImageInputs from "@/app/components/general/ImageInputs";
import TitleDescriptionInput from "@/app/components/general/TitleDescriptionInput";
import { UserInterface } from "@/app/interfaces";
import { sampleUsers } from "@/app/lib/sampleData";
import { InfoOutlined, Person } from "@mui/icons-material";
import { Box, TextField, Typography } from "@mui/material";

export default function Page({ searchParams: { edit } }: { searchParams: { edit: string } }) {
   const editing = edit === "true";
   const user = editing ? sampleUsers[1] : undefined;

   const content = [
      <Step1 key={"step-item#1"} user={user} />,
      <Step2 key={"step-item#2"} user={user} />,
      <Step3 key={"step-item#3"} user={user} />,
      <Step4 key={"step-item#4"} user={user} />,
   ];

   return (
      <form>
         <Box sx={{ mb: 3 }} className="flex flex-col items-center gap-2 justify-center">
            <Person fontSize="large" />
            <Typography variant="h3" textAlign="center">
               {editing ? "Edit Account Details" : "Account Details"}
            </Typography>
         </Box>

         <FormSteps content={content} />
      </form>
   );
}

function Step1({ user }: { user: UserInterface | undefined }) {
   return (
      <>
         <div className="flex flex-col gap-5 py-4 px-3 md:py-5 md:px-5">
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
               defaultValue={user?.jobTitle}
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
               defaultValue={user?.industry}
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
               defaultValue={user?.worksAt}
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
               defaultValue={user?.location}
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
               defaultValue={user?.bio}
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
               defaultValue={user?.contactDetails}
               fullWidth
               required
               inputProps={{ min: 3, max: 100 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />
         </div>
      </>
   );
}

function Step2({ user }: { user: UserInterface | undefined }) {
   return (
      <div className="flex flex-col gap-5 p-5">
         <Typography sx={{ mb: -1 }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            What services / value do you offer?
         </Typography>

         <TitleDescriptionInput
            title="Service / Value"
            descriptionName="description"
            defaults={user?.serviceOfferings.map((item) => ({ name: item.service, description: item.description }))}
         />
      </div>
   );
}

function Step3({ user }: { user: UserInterface | undefined }) {
   return (
      <div className="flex flex-col gap-5 p-5">
         <Typography sx={{ mb: -1 }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            Do you have any social media accounts?
         </Typography>

         <TitleDescriptionInput
            title="social platform"
            descriptionName="account url"
            defaults={user?.socialMedia?.map((item) => ({ name: item.platform, description: item.url }))}
         />
      </div>
   );
}

function Step4({ user }: { user: UserInterface | undefined }) {
   return (
      <>
         <div className="flex flex-col gap-5 py-4 px-3 md:py-5 md:px-5">
            <Typography sx={{ px: 2, textAlign: "center" }}>
               <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
               Now, lets upload some images of you / your work. Start with a display photo.
            </Typography>

            <div className="w-full max-w-[25rem] grid grid-cols-3 gap-2 mx-auto">
               <ImageInputs defaults={user?.images} />
            </div>
         </div>
      </>
   );
}
