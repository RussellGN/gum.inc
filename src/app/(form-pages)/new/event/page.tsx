import FormSteps from "@/app/components/general/FormSteps";
import ImageInputs from "@/app/components/general/ImageInputs";
import TitleDescriptionInput from "@/app/components/general/TitleDescriptionInput";
import { EventInterface } from "@/app/interfaces";
import { sampleEvents } from "@/app/lib/sampleData";
import { capitalizeWords } from "@/app/lib/utils";
import { Event, InfoOutlined } from "@mui/icons-material";
import { Box, TextField, Typography } from "@mui/material";

export default function Page({ searchParams: { eventSlug } }: { searchParams: { eventSlug: string } }) {
   const event = sampleEvents.find((event) => event.slug === eventSlug);

   const content = [
      <Step1 key={"step-item#1"} event={event} />,
      <Step2 key={"step-item#2"} event={event} />,
      <Step3 key={"step-item#3"} event={event} />,
      <Step4 key={"step-item#4"} event={event} />,
      <Step5 key={"step-item#5"} event={event} />,
   ];

   return (
      <form>
         <Box sx={{ mb: 3 }} className="flex flex-col items-center gap-2 justify-center">
            <Event fontSize="large" />
            <Typography variant="h3" textAlign="center">
               {event?.id ? `Editing ${capitalizeWords(event.name)}` : "New Event Showcase"}
            </Typography>
         </Box>

         <FormSteps content={content} />
      </form>
   );
}

function Step1({ event }: { event: EventInterface | undefined }) {
   return (
      <>
         <div className="flex flex-col gap-5 py-4 px-3 md:py-5 md:px-5">
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
               defaultValue={event?.name}
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
               defaultValue={event?.location}
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
               defaultValue={event?.eventType}
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
               defaultValue={event?.about}
               multiline
               rows={4}
               fullWidth
               required
               inputProps={{ min: 3, max: 500 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />

            <Typography sx={{ mb: -1 }}>
               <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
               Start Date
            </Typography>
            <TextField
               variant="filled"
               size="small"
               name="start-date"
               type="date"
               defaultValue={event?.startDate ? new Date(event.startDate).toISOString().split("T")[0] : undefined}
               fullWidth
               required
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />

            <Typography sx={{ mb: -1 }}>
               <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
               End Date
            </Typography>
            <TextField
               variant="filled"
               size="small"
               name="end-date"
               type="date"
               defaultValue={event?.endDate ? new Date(event.endDate).toISOString().split("T")[0] : undefined}
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
               defaultValue={event?.contactDetails}
               fullWidth
               required
               inputProps={{ min: 3, max: 100 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />
         </div>
      </>
   );
}

function Step2({ event }: { event: EventInterface | undefined }) {
   return (
      <div className="flex flex-col gap-5 p-5">
         <Typography sx={{ mb: -1 }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            What are some Key take-aways of the event?
         </Typography>

         <TitleDescriptionInput
            title="take-away"
            descriptionName="description"
            defaults={event?.keyTakeaways.map((item) => ({ name: item.takeaway, description: item.description }))}
         />
      </div>
   );
}

function Step3({ event }: { event: EventInterface | undefined }) {
   return (
      <div className="flex flex-col gap-5 p-5">
         <Typography sx={{ mb: -1 }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            Will any note-worthy hosts/guests be attending?
         </Typography>

         <TitleDescriptionInput
            title="host/guest"
            descriptionName="about host/guest"
            defaults={event?.hosts?.map((item) => ({ name: item.name, description: item.bio }))}
         />
      </div>
   );
}

function Step4({ event }: { event: EventInterface | undefined }) {
   return (
      <div className="flex flex-col gap-5 p-5">
         <Typography sx={{ mb: -1 }}>
            <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
            Social media links for the event
         </Typography>

         <TitleDescriptionInput
            title="social platform"
            descriptionName="account url"
            defaults={event?.socialMedia?.map((item) => ({ name: item.platform, description: item.url }))}
         />
      </div>
   );
}

function Step5({ event }: { event: EventInterface | undefined }) {
   return (
      <>
         <div className="flex flex-col gap-5 py-4 px-3 md:py-5 md:px-5">
            <Typography sx={{ px: 2, textAlign: "center" }}>
               <InfoOutlined fontSize="inherit" sx={{ mt: -0.4, mr: 1 }} />
               Now, lets upload some images of / related to the event. Start with a logo or main feature.
            </Typography>

            <div className="w-full max-w-[25rem] grid grid-cols-3 gap-2 mx-auto">
               <ImageInputs defaults={event?.images} />
            </div>
         </div>
      </>
   );
}
