import { EventInterface } from "@/app/interfaces";
import { Verified, LocationOn, Event } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import AspectContainedNextImage from "../general/AspectContainedNextImage";
import SaveIncButton from "./SaveIncButton";
import { friendlyDate } from "@/app/lib/utils";

export default function EventCard({ event }: { event: EventInterface }) {
   return (
      <Box className="block border rounded-[15px] bg-white  ">
         <Box
            component={Link}
            href={`/inc-connect/event/${event.slug}`}
            className="block border pb-2 border-b-0 border-[transparent] rounded-tl-[15px] rounded-tr-[15px] cursor-pointer transition-all hover:border-slate-400 hover:bg-slate-50"
         >
            <Grid container gap={1} justifyContent="space-between" className="p-1.5 ">
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

            <AspectContainedNextImage src={event.displayPhoto} alt={event.name} aspectRatio="3 / 2" />
            <div className="p-2 pb-0">
               <Typography component="p" variant="caption" color="grey">
                  {`${friendlyDate(event.startDate)} `}
               </Typography>
            </div>
         </Box>
         <Box className="p-2 pt-0">
            <div className="flex items-center justify-between gap-3 border-t-2">
               <Typography noWrap className="flex-grow">
                  <LocationOn fontSize="inherit" sx={{ mr: 0.2, mt: -0.2 }} />
                  {event.location}
               </Typography>

               <SaveIncButton />
            </div>
         </Box>
      </Box>
   );
}
