import FormSteps from "@/app/components/general/FormSteps";
import ImageInputs from "@/app/components/general/ImageInputs";
import TitleDescriptionInput from "@/app/components/general/TitleDescriptionInput";
import { OrganizationInterface } from "@/app/interfaces";
import { sampleOrganizations } from "@/app/lib/sampleData";
import { capitalizeWords } from "@/app/lib/utils";
import { Business, InfoOutlined } from "@mui/icons-material";
import { Box, TextField, Typography } from "@mui/material";

export default function Page({ searchParams: { organizationSlug } }: { searchParams: { organizationSlug: string } }) {
   const organization = sampleOrganizations.find((organization) => organization.slug === organizationSlug);

   const content = [
      <Step1 key={"step-item#1"} organization={organization} />,
      <Step2 key={"step-item#2"} organization={organization} />,
      <Step3 key={"step-item#3"} organization={organization} />,
      <Step4 key={"step-item#4"} organization={organization} />,
      <Step5 key={"step-item#5"} organization={organization} />,
   ];

   return (
      <form>
         <Box sx={{ mb: 3 }} className="flex flex-col items-center gap-2 justify-center">
            <Business fontSize="large" />
            <Typography variant="h3" textAlign="center">
               {organization?.id ? `Editing ${capitalizeWords(organization.name)}` : "New Organization Showcase"}
            </Typography>
         </Box>

         <FormSteps content={content} />
      </form>
   );
}

function Step1({ organization }: { organization: OrganizationInterface | undefined }) {
   return (
      <>
         <div className="flex flex-col gap-5 py-4 px-3 md:py-5 md:px-5">
            <Typography sx={{ px: 2, textAlign: "center" }}>
               <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
               Tell us about the organization you would like to showcase on the platform
            </Typography>
            <TextField
               variant="filled"
               size="small"
               label="Organization Name"
               name="name"
               placeholder="What's the name of the organization?"
               defaultValue={organization?.name}
               fullWidth
               required
               inputProps={{ min: 3, max: 80 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />
            <TextField
               variant="filled"
               size="small"
               label="Location"
               name="location"
               placeholder="Where is the organization located?"
               defaultValue={organization?.location}
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
               placeholder="In what industry does the organization operate?"
               defaultValue={organization?.industry}
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
               placeholder="Tell us more about your organization"
               defaultValue={organization?.about}
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
               type="email"
               label="Email"
               name="email"
               placeholder="What is the organization's email address?"
               defaultValue={organization?.email}
               fullWidth
               required
               inputProps={{ min: 3, max: 100 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />

            <TextField
               variant="filled"
               size="small"
               label="Contact Details"
               name="contact-details"
               placeholder="How should people get in touch?"
               defaultValue={organization?.contactDetails}
               fullWidth
               required
               inputProps={{ min: 3, max: 100 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />
         </div>
      </>
   );
}

function Step2({ organization }: { organization: OrganizationInterface | undefined }) {
   return (
      <div className="flex flex-col gap-5 p-5">
         <Typography sx={{ mb: -1 }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            What services does your organization provide? what is its cause?
         </Typography>

         <TitleDescriptionInput
            title="Service / Cause"
            descriptionName="description"
            defaults={organization?.serviceOfferings?.map((item) => ({
               name: item.service,
               description: item.description,
            }))}
         />
      </div>
   );
}

function Step3({ organization }: { organization: OrganizationInterface | undefined }) {
   return (
      <div className="flex flex-col gap-5 p-5">
         <Typography sx={{ mb: -1 }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            Would you like to share your team?
         </Typography>

         <TitleDescriptionInput
            title="team member"
            descriptionName="about team member"
            defaults={organization?.team?.map((item) => ({ name: item.name, description: item.bio }))}
         />
      </div>
   );
}

function Step4({ organization }: { organization: OrganizationInterface | undefined }) {
   return (
      <div className="flex flex-col gap-5 p-5">
         <Typography sx={{ mb: -1 }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            Does your organization have any social media accounts?
         </Typography>

         <TitleDescriptionInput
            title="social platform"
            descriptionName="account url"
            defaults={organization?.socialMedia?.map((item) => ({ name: item.platform, description: item.url }))}
         />
      </div>
   );
}

function Step5({ organization }: { organization: OrganizationInterface | undefined }) {
   return (
      <>
         <div className="flex flex-col gap-5 py-4 px-3 md:py-5 md:px-5">
            <Typography sx={{ px: 2, textAlign: "center" }}>
               <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
               Now, lets upload some images of / related to the organization. Start with a logo or main feature.
            </Typography>

            <div className="w-full max-w-[25rem] grid grid-cols-3 gap-2 mx-auto">
               <ImageInputs defaults={organization?.images} />
            </div>
         </div>
      </>
   );
}
