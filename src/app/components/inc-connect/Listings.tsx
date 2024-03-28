"use client";

import { Pagination, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import JoinCard from "./JoinCard";
import { directories } from "@/app/lib/constants";
import { sampleEstablishments, sampleEvents, sampleUsers } from "@/app/lib/sampleData";
import { EstablishmentInterface, EventInterface, UserInterface } from "@/app/interfaces";
import Listing from "./Listing";

export default function Listings() {
   const readOnlySearchParams = useSearchParams();
   const activeDir = readOnlySearchParams.get("dir") || directories[0].name;

   const activeDirFor = directories.find((dir) => dir.name === activeDir)?.for;
   let listings: (EventInterface | UserInterface | EstablishmentInterface)[];

   switch (activeDirFor) {
      case "users":
         listings = sampleUsers;
         break;
      case "events":
         listings = sampleEvents;
         break;
      case "establishments":
         listings = sampleEstablishments;
         break;
      case "users-establishments":
         listings = [...sampleUsers, ...sampleEstablishments];
         break;
      default:
         throw new Error("could not determine listings to display for dir: " + activeDir);
   }

   listings = listings.sort((listing1, listing2) => listing1.name.localeCompare(listing2.name));

   return (
      <>
         <Typography textAlign="center" sx={{ px: 2, mb: 3 }}>
            Showing all listings in <strong>{activeDir} - UK access</strong>
         </Typography>
         <div className="grid grid-cols-5 gap-2 ">
            <JoinCard directory={activeDir} />
            {listings.map((listing) => (
               <Listing key={listing.slug} listing={listing} />
            ))}
         </div>

         <Pagination page={1} count={5} className="w-fit mx-auto my-[5rem]" />
      </>
   );
}
