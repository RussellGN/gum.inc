"use client";

import images from "@/app/assets";
import {
   Event,
   HolidayVillage,
   LocationOn,
   MedicalServices,
   Medication,
   Message,
   Money,
   MusicNote,
   Verified,
   Work,
} from "@mui/icons-material";
import { Typography, Box, Tab, Tabs, SvgIconTypeMap, IconButton, Button } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Image from "next/image";
import React, { ReactNode } from "react";

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
               // centered
            >
               {tabs.map((tab, index) => (
                  <Tab {...a11yProps(index)} icon={tab.icon} label={tab.label} />
               ))}
            </Tabs>
         </Box>

         <Box>
            {tabs.map((tab, index) => (
               <CustomTabPanel value={value} index={index}>
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
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }} className="flex overflow-x-auto gap-5">
               {[1, 2, 3, 4, 5].map((num) => (
                  <div className="bg-[whitesmoke] border rounded-md shadow-md ">
                     <div className="p-1">
                        <div className="flex gap-3 items-center px-2">
                           <Image
                              src={images.user1}
                              alt="user"
                              className="w-9 h-9 object-cover rounded-[100%] border shadow-md"
                           />
                           <div className="mr-auto ml-2">
                              <Typography variant="caption">Will Cosby</Typography>
                           </div>
                           <Verified fontSize="small" />
                        </div>

                        <div className="flex gap-3 flex-wrap pt-4 px-4">
                           <Box sx={{ bgcolor: "divider", width: "10%", height: "0.4rem", m: 0.05 }}></Box>
                           <Box sx={{ bgcolor: "divider", width: "40%", height: "0.4rem", m: 0.05 }}></Box>
                           <Box sx={{ bgcolor: "divider", width: "60%", height: "0.4rem", m: 0.05 }}></Box>
                           <Box sx={{ bgcolor: "divider", width: "30%", height: "0.4rem", m: 0.05 }}></Box>
                           <Box sx={{ bgcolor: "divider", width: "80%", height: "0.4rem", m: 0.05 }}></Box>
                           <Box sx={{ bgcolor: "divider", width: "10%", height: "0.4rem", m: 0.05 }}></Box>
                           <Box sx={{ bgcolor: "divider", width: "50%", height: "0.4rem", m: 0.05 }}></Box>
                        </div>

                        <div className="flex gap-2 justify-around mt-4 px-2">
                           <Typography
                              variant="subtitle1"
                              className=" flex items-center gap-2 p-1 justify-center text-center"
                           >
                              <LocationOn /> Ipswich
                           </Typography>
                           <IconButton color="secondary" size="small">
                              <Message />
                           </IconButton>
                        </div>
                     </div>
                  </div>
               ))}{" "}
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
