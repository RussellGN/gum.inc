"use client";

import { Pagination, Typography } from "@mui/material";
import React from "react";
import UserCard from "./UserCard";
import { useSearchParams } from "next/navigation";
import JoinCard from "./JoinCard";
import { directories } from "@/app/lib/constants";
import { sampleUsers } from "@/app/lib/sampleData";

export default function Listings() {
   const readOnlySearchParams = useSearchParams();
   const activeDir = readOnlySearchParams.get("dir") || directories[0].name;

   // const listings = sampleUsers.sort(() => Math.random() - 0.5);
   const listings = sampleUsers;

   return (
      <>
         <Typography textAlign="center" sx={{ px: 2, mb: 3 }}>
            Showing all listings in <strong>{activeDir} - UK access</strong>
         </Typography>
         <div className="grid grid-cols-5 gap-2 ">
            <JoinCard directory={activeDir} />
            {listings.map((user) => (
               <UserCard key={user.slug} user={user} />
            ))}
         </div>

         <Pagination page={1} count={5} className="w-fit mx-auto my-[5rem]" />
      </>
   );
}
