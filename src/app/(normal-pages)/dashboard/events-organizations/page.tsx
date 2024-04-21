import ResponsiveTypography from "@/app/components/general/ResponsiveTypography";
import Verification from "@/app/components/general/Verification";
import { ListingInterface } from "@/app/interfaces";
import { sampleEvents, sampleOrganizations } from "@/app/lib/sampleData";
import { Edit } from "@mui/icons-material";
import { Link as MuiLink, Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
   const events = sampleEvents.splice(0, 2);
   const organizations = sampleOrganizations.splice(3, 1);

   return (
      <Box sx={{ px: { xs: 1, md: 5 }, mt: 2 }}>
         <Box sx={{ mb: 5 }}>
            <ResponsiveTypography
               mobileVariant="h4"
               desktopVariant="h3"
               className="w-fit border-b-8 pb-2"
               sx={{ mb: { xs: 2, md: 4 } }}
            >
               Event Pages
            </ResponsiveTypography>

            <Box sx={{ gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }} className="grid gap-2">
               {events.map((event) => (
                  <ListingPageCard key={event.id} listing={event} />
               ))}
            </Box>
         </Box>

         <Box sx={{ mb: 5 }}>
            <ResponsiveTypography
               mobileVariant="h4"
               desktopVariant="h3"
               className="w-fit border-b-8 pb-2"
               sx={{ mb: { xs: 2, md: 4 } }}
            >
               Businesses & Other Entity Pages
            </ResponsiveTypography>

            <Box sx={{ gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" } }} className="grid gap-2">
               {organizations.map((organization) => (
                  <ListingPageCard key={organization.id} listing={organization} />
               ))}
            </Box>
         </Box>
      </Box>
   );
}

function ListingPageCard({ listing }: { listing: ListingInterface }) {
   return (
      <Box sx={{ p: 1.5 }} className="bg-white rounded-[10px] border flex gap-2 md:gap-3 items-start">
         <div>
            <Image
               src={listing.displayPhoto}
               alt={listing.name}
               priority
               quality={100}
               className="rounded-[10px] border aspect-square object-cover w-[5rem] md:w-[8rem]"
            />
         </div>

         <div className="mr-auto">
            <MuiLink
               component={Link}
               href={`/inc-connect/${listing.type}/${listing.slug}`}
               fontWeight="bold"
               sx={{ mb: 1, width: "5rem" }}
            >
               {listing.name}
            </MuiLink>

            <Typography sx={{ mb: 1 }}>
               Type:{" "}
               <Typography variant="inherit" fontWeight="bold" component="span">
                  {listing.type}
               </Typography>
            </Typography>

            <Verification isVerified={listing.verified} />
         </div>

         <div>
            <IconButton
               size="small"
               sx={{ backgroundColor: "whitesmoke", border: "solid 1px", borderColor: "divider" }}
               component={Link}
               href={"/new/" + listing.type + "?" + listing.type + "Slug=" + listing.slug}
            >
               <Edit />
            </IconButton>
         </div>
      </Box>
   );
}
