import { sampleOrganizations, sampleEvents, sampleUsers } from "@/app/lib/sampleData";
import { Box, Grid, Typography } from "@mui/material";
import {
   Verified,
   LocationOn,
   Message,
   AutoStories,
   Star,
   BusinessCenter,
   Workspaces,
   Event,
   Business,
} from "@mui/icons-material";
import AspectContainedNextImage from "../general/AspectContainedNextImage";
import { gradients } from "@/app/lib/constants";
import { friendlyDate } from "@/app/lib/utils";
import UncontolledSlideshow from "../general/UncontolledSlideshow";

export default function GridItem1() {
   const user = sampleUsers[7];
   const event = sampleEvents[0];
   const organization = sampleOrganizations[2];

   const slides = [
      <div key="item1-slide1" className="h-full">
         <Box className="border rounded-[15px] bg-white flex flex-col flex-1 justify-around h-full p-1.5">
            <Grid container spacing={1} justifyContent="space-between" className="mb-2 ">
               <Grid item xs zeroMinWidth>
                  <Typography fontWeight="bold" noWrap sx={{ textDecoration: "underline" }}>
                     {user.name}
                  </Typography>
                  <Typography variant="caption" noWrap component="p">
                     {user.jobTitle}
                  </Typography>
               </Grid>
               <Grid item xs="auto">
                  <Verified fontSize="small" />
               </Grid>
            </Grid>

            <Box
               sx={{
                  position: "relative",
                  "&:after": {
                     content: "''",
                     position: "absolute",
                     top: 0,
                     left: 0,
                     width: "100%",
                     height: "100%",
                     backgroundColor: "rgba(255,255,255,0.3)",
                     borderRadius: "10px",
                  },
               }}
            >
               <AspectContainedNextImage
                  src={user.displayPhoto}
                  alt={user.name}
                  sx={{
                     borderRadius: "10px",
                  }}
               />
            </Box>

            <Box className="mt-2 flex justify-between items-center">
               <Typography noWrap className="flex-grow">
                  <LocationOn fontSize="inherit" sx={{ mr: 0.2, mt: -0.2 }} />
                  {user.location}
               </Typography>
               <Message />
            </Box>
         </Box>
      </div>,

      <div key="item1-slide2" className="items-center justify-center h-full">
         <Box
            className="h-full p-3 text-white border flex flex-col justify-around shadow-lg rounded-[10px]"
            sx={{ background: gradients.primary1 }}
         >
            <Typography variant="subtitle2" className="flex items-center gap-3">
               <AutoStories />
               <span>10+ Curated Directories</span>
            </Typography>
            <Typography variant="subtitle2" className="flex items-center gap-3">
               <Workspaces />
               <span>Encompassing Various Industries</span>
            </Typography>
            <Typography variant="subtitle2" className="flex items-center gap-3">
               <BusinessCenter />
               <span>Proffessionals, Services, Businessses, Events</span>
            </Typography>
            <Typography variant="subtitle2" className="flex items-center gap-3">
               <Star />
               <span> And More</span>
            </Typography>
         </Box>
      </div>,

      <div key="item1-slide3" className="h-full">
         <Box className="border rounded-[15px] bg-slate-100 flex flex-col flex-1 justify-around h-full p-1.5">
            <Grid container gap={1} justifyContent="space-between" className="mb-2 ">
               <Grid item xs zeroMinWidth>
                  <Typography fontWeight="bold" noWrap sx={{ textDecoration: "underline" }}>
                     {event.name}
                  </Typography>
                  <Typography variant="caption" component="div">
                     {event.eventType}
                  </Typography>
               </Grid>
               <Grid item xs="auto">
                  <div className="flex flex-col gap-1">
                     <Verified fontSize="small" />
                     <Event fontSize="small" />
                  </div>
               </Grid>
            </Grid>

            <Box
               sx={{
                  position: "relative",
                  "&:after": {
                     content: "''",
                     position: "absolute",
                     top: 0,
                     left: 0,
                     width: "100%",
                     height: "100%",
                     backgroundColor: "rgba(255,255,255,0.3)",
                     borderRadius: "10px",
                  },
               }}
            >
               <AspectContainedNextImage
                  src={event.displayPhoto}
                  alt={event.name}
                  sx={{
                     borderRadius: "10px",
                  }}
               />
            </Box>

            <Box className="mt-2 flex justify-between items-center">
               <Typography noWrap className="flex-grow">
                  <LocationOn fontSize="inherit" sx={{ mr: 0.2, mt: -0.2 }} />
                  {event.location}
               </Typography>
               <Typography variant="caption" color="grey">
                  {`${friendlyDate(event.startDate)} `}
               </Typography>
            </Box>
         </Box>
      </div>,

      <div key="item1-slide4" className="h-full">
         <Box className="border rounded-[15px] bg-white flex flex-col flex-1 justify-around h-full p-1.5">
            <Grid container gap={1} justifyContent="space-between" className="mb-2 ">
               <Grid item xs zeroMinWidth>
                  <Typography fontWeight="bold" noWrap sx={{ textDecoration: "underline" }}>
                     {organization.name}
                  </Typography>
                  <Typography variant="caption" component="div">
                     {organization.industry}
                  </Typography>
               </Grid>
               <Grid item xs="auto">
                  <div className="flex flex-col gap-1">
                     <Verified fontSize="small" />
                     <Business fontSize="small" />
                  </div>
               </Grid>
            </Grid>

            <Box
               sx={{
                  position: "relative",
                  "&:after": {
                     content: "''",
                     position: "absolute",
                     top: 0,
                     left: 0,
                     width: "100%",
                     height: "100%",
                     backgroundColor: "rgba(255,255,255,0.3)",
                     borderRadius: "10px",
                  },
               }}
            >
               <AspectContainedNextImage
                  src={organization.displayPhoto}
                  alt={organization.name}
                  sx={{
                     borderRadius: "10px",
                  }}
               />
            </Box>

            <Box className="mt-2 flex justify-between items-center">
               <Typography noWrap className="flex-grow">
                  <LocationOn fontSize="inherit" sx={{ mr: 0.2, mt: -0.2 }} />
                  {organization.location}
               </Typography>
               <Message />
            </Box>
         </Box>
      </div>,
   ];

   return (
      <div className="col-span-3 row-span-2 flex items-center p-1">
         <UncontolledSlideshow slides={slides} />
      </div>
   );
}
