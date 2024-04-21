import IsMobileGrid from "@/app/components/dashboard/IsMobileGrid";
import ResponsiveTypography from "@/app/components/general/ResponsiveTypography";
import EventCard from "@/app/components/inc-connect/EventCard";
import OrganizationCard from "@/app/components/inc-connect/OrganizationCard";
import SearchAndControls from "@/app/components/inc-connect/SearchAndControls";
import UserCard from "@/app/components/inc-connect/UserCard";
import { OrganizationInterface, UserInterface } from "@/app/interfaces";
import { sampleEvents, sampleOrganizationsForFeature, sampleUsersForFeature } from "@/app/lib/sampleData";
import { Box } from "@mui/material";

export default function page() {
   const peopleEntities = [...sampleUsersForFeature, ...sampleOrganizationsForFeature]
      .sort((listing1, listing2) => listing1.name.localeCompare(listing2.name))
      .splice(0, 10);

   const events = sampleEvents.splice(0, 5);

   return (
      <Box sx={{ px: { xs: 1, md: 5 }, mt: 2 }}>
         <SearchAndControls />

         <Box sx={{ mb: 5 }}>
            <ResponsiveTypography
               mobileVariant="h4"
               desktopVariant="h3"
               className="w-fit border-b-8 pb-2"
               sx={{ mb: { xs: 2, md: 4 } }}
            >
               Events
            </ResponsiveTypography>

            <IsMobileGrid>
               {events.map((event) => (
                  <EventCard initiallySaved key={event.slug} event={event} />
               ))}
            </IsMobileGrid>
         </Box>

         <Box sx={{ mb: 5 }}>
            <ResponsiveTypography
               mobileVariant="h4"
               desktopVariant="h3"
               className="w-fit border-b-8 pb-2"
               sx={{ mb: { xs: 2, md: 4 } }}
            >
               People, Businesses & Other...
            </ResponsiveTypography>

            <IsMobileGrid>
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
            </IsMobileGrid>
         </Box>
      </Box>
   );
}
