"use client";

import { sampleEvents, sampleOrganizationsForFeature, sampleUsersForFeature } from "@/app/lib/sampleData";
import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import UserCard from "../inc-connect/UserCard";
import { directories } from "@/app/lib/constants";
import { EventInterface, OrganizationInterface, UserInterface } from "@/app/interfaces";
import EventCard from "../inc-connect/EventCard";
import OrganizationCard from "../inc-connect/OrganizationCard";

export default function DirectoriesTabs() {
   const [value, setValue] = React.useState(0);

   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
   };

   return (
      <Box>
         <Box className="border-b" sx={{ maxWidth: 400, mx: "auto" }}>
            <Tabs
               value={value}
               onChange={handleChange}
               variant="scrollable"
               scrollButtons="auto"
               aria-label="scrollable auto tabs example"
            >
               {tabs.map((tab, index) => (
                  <Tab
                     key={tab.label}
                     sx={{ textTransform: "capitalize" }}
                     color="secondary"
                     iconPosition="start"
                     {...a11yProps(index)}
                     icon={tab.icon}
                     label={tab.label}
                  />
               ))}
            </Tabs>
         </Box>

         <Box>
            {tabs.map((tab, index) => (
               <CustomTabPanel key={"panel-" + tab.label} value={value} index={index} listings={tab.listings} />
            ))}
         </Box>
      </Box>
   );
}

type tab = {
   icon: React.JSX.Element;
   label: string;
   listings: (EventInterface | UserInterface | OrganizationInterface)[];
};

const tabs: tab[] = directories
   .filter((dir) => !dir.name.toLowerCase().includes("event"))
   .splice(0, 5)
   .map((dir) => {
      function determineListings() {
         let listings: (EventInterface | UserInterface | OrganizationInterface)[];

         switch (dir.for) {
            case "users":
               listings = sampleUsersForFeature;
               break;
            case "events":
               listings = sampleEvents;
               break;
            case "organizations":
               listings = sampleOrganizationsForFeature;
               break;
            case "users-organizations":
               listings = [...sampleUsersForFeature, ...sampleOrganizationsForFeature];
               break;
            default:
               throw new Error("could not determine listings to display for dir: " + dir.name);
         }

         const deleteCount = listings.length > 5 ? 5 : listings.length;
         listings = listings.splice(0, deleteCount);
         return listings.sort((listing1, listing2) => listing1.name.localeCompare(listing2.name));
      }

      return {
         icon: dir.icon,
         label: dir.name,
         listings: determineListings(),
      };
   });

function CustomTabPanel(props: TabPanelProps) {
   const { value, index, listings, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 2 }} className="grid grid-flow-col auto-cols-auto overflow-x-auto gap-3">
               {listings.map((listing) => (
                  <div key={listing.id} className="w-[10rem]">
                     {listing.type === "user" ? (
                        <UserCard key={listing.slug} user={listing as UserInterface} />
                     ) : listing.type === "event" ? (
                        <EventCard key={listing.slug} event={listing as EventInterface} />
                     ) : (
                        <OrganizationCard key={listing.slug} organization={listing as OrganizationInterface} />
                     )}
                  </div>
               ))}
            </Box>
         )}
      </div>
   );
}

interface TabPanelProps {
   index: number;
   value: number;
   listings: (EventInterface | UserInterface | OrganizationInterface)[];
}

function a11yProps(index: number) {
   return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
   };
}
