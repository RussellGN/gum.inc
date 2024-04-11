import EventCard from "@/app/components/inc-connect/EventCard";
import OrganizationCard from "@/app/components/inc-connect/OrganizationCard";
import SearchAndControls from "@/app/components/inc-connect/SearchAndControls";
import UserCard from "@/app/components/inc-connect/UserCard";
import { OrganizationInterface, UserInterface } from "@/app/interfaces";
import { sampleEvents, sampleOrganizationsForFeature, sampleUsersForFeature } from "@/app/lib/sampleData";
import { Box, Typography } from "@mui/material";

export default function page() {
   const peopleEntities = [...sampleUsersForFeature, ...sampleOrganizationsForFeature]
      .sort((listing1, listing2) => listing1.name.localeCompare(listing2.name))
      .splice(0, 10);

   const events = sampleEvents.splice(0, 5);

   return (
      <Box sx={{ px: 5 }}>
         <SearchAndControls />

         <Box sx={{ mb: 5 }}>
            <Typography variant="h3" className="w-fit border-b-8 pb-2" sx={{ mb: 4 }}>
               Events
            </Typography>
            <div className="grid grid-cols-5 gap-2 ">
               {events.map((event) => (
                  <EventCard initiallySaved key={event.slug} event={event} />
               ))}
            </div>
         </Box>

         <Box sx={{ mb: 10 }}>
            <Typography variant="h3" className="w-fit border-b-8 pb-2" sx={{ mb: 4 }}>
               People, Businesses & Other...
            </Typography>
            <div className="grid grid-cols-5 gap-2 ">
               {peopleEntities.map((peopleEntity) =>
                  peopleEntity.type === "user" ? (
                     <UserCard initiallySaved key={peopleEntity.slug} user={peopleEntity as UserInterface} />
                  ) : (
                     <OrganizationCard
                        initiallySaved
                        key={peopleEntity.slug}
                        organization={peopleEntity as OrganizationInterface}
                     />
                  )
               )}
            </div>
         </Box>
      </Box>
   );
}
