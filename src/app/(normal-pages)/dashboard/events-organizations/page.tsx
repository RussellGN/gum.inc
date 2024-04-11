import Verification from "@/app/components/general/Verification";
import { ListingInterface } from "@/app/interfaces";
import { sampleEvents, sampleOrganizations } from "@/app/lib/sampleData";
import { Edit, OpenInBrowser } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
   const events = sampleEvents.splice(0, 2);
   const organizations = sampleOrganizations.splice(3, 1);

   return (
      <Box sx={{ px: 5 }}>
         <Box sx={{ mb: 5 }}>
            <Typography variant="h3" className="w-fit border-b-8 pb-2" sx={{ mb: 4 }}>
               Event Pages
            </Typography>
            <div className="flex gap-2 ">
               {events.map((event) => (
                  <ListingPageCard key={event.id} listing={event} />
               ))}
            </div>
         </Box>

         <Box sx={{ mb: 10 }}>
            <Typography variant="h3" className="w-fit border-b-8 pb-2" sx={{ mb: 4 }}>
               Businesses & Other Entity Pages
            </Typography>
            <div className="flex gap-2">
               {organizations.map((organization) => (
                  <ListingPageCard key={organization.id} listing={organization} />
               ))}
            </div>
         </Box>
      </Box>
   );
}

function ListingPageCard({ listing }: { listing: ListingInterface }) {
   return (
      <Box className="bg-white rounded-[15px] p-5 border flex gap-8 items-start">
         <div className="flex gap-5 items-start">
            <Image
               src={listing.displayPhoto}
               alt={listing.name}
               priority
               quality={100}
               className="rounded-[10px] border aspect-square object-cover w-[8rem]"
            />

            <div>
               <Typography variant="h4" sx={{ mb: 1, width: "5rem" }}>
                  {listing.name}
               </Typography>

               <Typography sx={{ mb: 1 }}>
                  Type:{" "}
                  <Typography variant="inherit" fontWeight="bold" color="primary" component="span">
                     {listing.type}
                  </Typography>
               </Typography>

               <Verification isVerified={listing.verified} />
            </div>
         </div>

         <Box className="flex flex-col gap-3 ml-12">
            <Button component={Link} href={`/inc-connect/${listing.type}/${listing.slug}`} endIcon={<OpenInBrowser />}>
               View
            </Button>
            <Button component={Link} href={`/new/${listing.type}/${listing.slug}`} endIcon={<Edit />}>
               Edit
            </Button>
         </Box>
      </Box>
   );
}
