"use client";

import { sampleUsers } from "@/app/lib/sampleData";
import { expandSize } from "@/app/types";
import { Badge, Box, Grid, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import AspectContainedNextImage from "../general/AspectContainedNextImage";
import { BarChart, Book, Bookmark, Mail, MonetizationOn, Person, Settings } from "@mui/icons-material";
import Link from "next/link";

export default function DashboardNav() {
   const [expand, setExpand] = useState<expandSize>("normal");
   const user = sampleUsers[1];

   if (!user) throw new Error("User not found");

   return (
      <Grid item xs>
         <Box className="min-h-[80vh] border  rounded-[20px] bg-white p-4 sticky top-[100px]">
            <AspectContainedNextImage
               src={user.displayPhoto}
               alt={user.name}
               aspectRatio="1 / 1"
               nextImageProps={{
                  className: "border-2 shadow-sm rounded-[100%]",
               }}
            />
            <Typography component="p" variant="caption" fontWeight="bold" textAlign="center" sx={{ mt: 1, mb: 3 }}>
               {user.name}
            </Typography>

            <ul className="list-none flex flex-col items-center gap-1.5">
               {dashboardNavLinks.map((dashLink, index) => (
                  <Box
                     component="li"
                     key={dashLink.label}
                     className="relative"
                     sx={{ [`&:hover .floating_label`]: { display: "block" } }}
                  >
                     <IconButton
                        component={Link}
                        href={dashLink.href}
                        sx={{ bgcolor: "whitesmoke", "&:hover": { bgcolor: "divider" } }}
                     >
                        {dashLink.icon}
                     </IconButton>
                     <Typography
                        variant="subtitle2"
                        sx={{ backgroundColor: "primary.main", display: "none", transition: "display 135ms linear" }}
                        className="floating_label my-0 absolute top-1/2 left-[110%] text-nowrap  text-white py-0.5 px-4 rounded-xl shadow-xl z-10 -translate-y-1/2"
                     >
                        {dashLink.label}
                     </Typography>
                  </Box>
               ))}
               <li className="mt-7">
                  <IconButton
                     component={Link}
                     href="/settings"
                     sx={{ bgcolor: "whitesmoke", "&:hover": { bgcolor: "divider" } }}
                  >
                     <Badge color="primary" badgeContent={5} max={9}>
                        <Mail />
                     </Badge>
                  </IconButton>
               </li>
               <li>
                  <IconButton
                     component={Link}
                     href="/settings"
                     sx={{ bgcolor: "whitesmoke", "&:hover": { bgcolor: "divider" } }}
                  >
                     <Settings />
                  </IconButton>
               </li>
            </ul>
         </Box>
      </Grid>
   );
}

type dashboardNavLink = {
   label: string;
   href: string;
   icon: JSX.Element;
};

const dashboardNavLinks: dashboardNavLink[] = [
   {
      label: "Details",
      href: "/dashboard",
      icon: <Person />,
   },
   {
      label: "Statistics",
      href: "/dashboard/statistics",
      icon: <BarChart />,
   },
   {
      label: "Saved Incs",
      href: "/dashboard/saved-incs",
      icon: <Bookmark />,
   },
   {
      label: "Monetization",
      href: "/dashboard/monetization",
      icon: <MonetizationOn />,
   },
   {
      label: "Featured Dirs",
      href: "/dashboard/featured-dirs",
      icon: <Book />,
   },
];
