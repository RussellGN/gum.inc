"use client";

import { Pagination, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import JoinCard from "./JoinCard";
import { directories } from "@/app/lib/constants";
import { sampleOrganizations, sampleEvents, sampleUsers } from "@/app/lib/sampleData";
import { OrganizationInterface, EventInterface, UserInterface } from "@/app/interfaces";
import Listing from "./Listing";

export default function Listings() {
   const readOnlySearchParams = useSearchParams();
   const activeDirName = readOnlySearchParams.get("dir") || directories[0].name;

   const activeDir = directories.find((dir) => dir.name === activeDirName);
   const activeDirFor = (directories.find((dir) => dir.name === activeDirName) || directories[0]).for;
   let listings: (EventInterface | UserInterface | OrganizationInterface)[];

   switch (activeDirFor) {
      case "users":
         listings = sampleUsers;
         break;
      case "events":
         listings = sampleEvents;
         break;
      case "organizations":
         listings = sampleOrganizations;
         break;
      case "users-organizations":
         listings = [...sampleUsers, ...sampleOrganizations];
         break;
      default:
         throw new Error("could not determine listings to display for dir: " + activeDirName);
   }

   listings = listings.sort((listing1, listing2) => listing1.name.localeCompare(listing2.name));

   return (
      <>
         <Typography textAlign="center" sx={{ px: 2, mb: 3 }}>
            Showing all listings in <strong>{activeDirName} - UK access</strong>
         </Typography>
         <div className="grid grid-cols-5 gap-2 ">
            <JoinCard dir={activeDir!} />
            {listings.map((listing) => (
               <Listing key={listing.slug} listing={listing} />
            ))}
         </div>

         <Pagination page={1} count={5} className="w-fit mx-auto my-[5rem]" />
      </>
   );
}
