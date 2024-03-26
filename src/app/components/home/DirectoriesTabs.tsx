"use client";

import { sampleUsers } from "@/app/lib/sampleData";
import { Event, MedicalServices, Money, MusicNote } from "@mui/icons-material";
import { Box, Tab, Tabs } from "@mui/material";
import React, { ReactNode } from "react";
import UserCard from "../inc-connect/UserCard";

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
               <CustomTabPanel key={"panel-" + tab.label} value={value} index={index}>
                  {tab.content}
               </CustomTabPanel>
            ))}
         </Box>
      </Box>
   );
}

type tab = {
   icon: React.JSX.Element;
   label: string;
   content: ReactNode;
};

const tabs: tab[] = [
   {
      label: "Finance",
      icon: <Money />,
      content: <div>finance listings go here</div>,
   },
   {
      label: "Music",
      icon: <MusicNote />,
      content: <div>Music listings go here</div>,
   },
   {
      label: "Events",
      icon: <Event />,
      content: <div>Event listings go here</div>,
   },
   {
      label: "Medicine",
      icon: <MedicalServices />,
      content: <div>Hospitals and Clinics listings go here</div>,
   },
   {
      label: "Tourism",
      icon: <MedicalServices />,
      content: <div>Hospitals and Clinics listings go here</div>,
   },
   {
      label: "Utility",
      icon: <MedicalServices />,
      content: <div>Hospitals and Clinics listings go here</div>,
   },
];

function CustomTabPanel(props: TabPanelProps) {
   const { value, index, ...other } = props;

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
               {sampleUsers.map((user) => (
                  <div key={user.id} className="w-[10rem]">
                     <UserCard key={user.slug} user={user} />
                  </div>
               ))}
            </Box>
         )}
      </div>
   );
}

interface TabPanelProps {
   children?: React.ReactNode;
   index: number;
   value: number;
}

function a11yProps(index: number) {
   return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
   };
}
