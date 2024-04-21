"use client";

import { Drawer, Box, IconButton, Typography, Badge } from "@mui/material";
import { Menu, Close, Message, Settings } from "@mui/icons-material";
import { dashboardNavLinks } from "@/app/lib/constants";
import { useState } from "react";
import useIsMobile from "@/app/hooks/useIsMobile";
import { usePathname } from "next/navigation";
import images from "@/app/assets";
import Link from "next/link";
import Image from "next/image";

export default function MobileDashboardNav() {
   const [isNavOpen, setIsNavOpen] = useState(false);
   const isMobile = useIsMobile();

   function openNav() {
      setIsNavOpen(true);
   }

   function closeNav() {
      setIsNavOpen(false);
   }

   if (!isMobile) return;

   return (
      <>
         <MobileNav isNavOpen={isNavOpen} closeNav={closeNav} />
         <div className="fixed bottom-0 right-0 p-2 bg-[rgba(255,255,255,0.4)] border-t-4 border-l-4 backdrop-blur rounded-tl-[20px] z-10 text-center flex flex-col items-center justify-center gap-1 shadow-2xl shadow-black">
            <IconButton
               size="large"
               sx={{ color: "white", background: "rgb(100,100,100)", "&:hover": { background: "rgb(50,50,50)" } }}
               onClick={openNav}
            >
               <Menu />
            </IconButton>
            <Typography>Menu</Typography>
         </div>
      </>
   );
}

function MobileNav({ isNavOpen, closeNav }: { isNavOpen: boolean; closeNav: () => void }) {
   const pathname = usePathname();
   const user = {
      type: "user",
      worksAt: "Independant",
      id: 1,
      slug: "esther-rios-1",
      name: "Esther Rios",
      email: "erios@gmail.com",
      jobTitle: "Visa Consultant",
      industry: "Travel & Finance",
      location: "Ipswich",
      verified: true,
      bio: "Experienced visa consultant adept at navigating complex immigration processes. Specializing in providing tailored solutions for individuals and businesses seeking to obtain visas for travel, work, or study purposes. Skilled in analyzing visa requirements, preparing documentation, and guiding clients through the application process efficiently. Committed to delivering exceptional service and ensuring client satisfaction. Proficient in addressing diverse visa-related inquiries and resolving issues promptly. Dedicated to staying updated on immigration laws and regulations to offer the most accurate advice and assistance.",
      displayPhoto: images.user4f,
      images: [images.visa_consultancy, images.firm2],
      serviceOfferings: [
         {
            service: "Visa Assessment",
            description:
               "Comprehensive evaluation of client eligibility and requirements for various types of visas, ensuring accurate guidance.",
         },
         {
            service: "Application Assistance",
            description:
               "Expert support in completing and submitting visa applications, minimizing errors and optimizing chances of approval.",
         },
         {
            service: "Document Preparation",
            description:
               "Thorough assistance in gathering and organizing required documents, streamlining the application process for clients.",
         },
         {
            service: "Consultation Sessions",
            description:
               "Personalized consultations to address specific visa-related queries, providing clarity and guidance tailored to individual circumstances.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "RiosConsultant",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "RiosConsultant",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "RiosConsultant",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "RiosConsultant",
            url: "#",
         },
      ],
   };

   if (!user) throw new Error("User not found");

   return (
      <Drawer open={isNavOpen} onClose={closeNav} anchor="left">
         <Box
            sx={{
               minWidth: "200px",
               width: "fit-content",
               p: 2,
               height: "100%",
               display: "flex",
               flexDirection: "column",
               backgroundColor: "white",
            }}
         >
            <div className="text-right">
               <IconButton onClick={closeNav}>
                  <Close />
               </IconButton>
            </div>

            <div className="my-auto">
               <div className="flex items-center justify-center">
                  <Image
                     src={user.displayPhoto}
                     alt={user.name}
                     width={100}
                     height={100}
                     className="w-[8rem] aspect-square object-cover border-2 shadow-sm rounded-[100%]"
                  />
               </div>

               <Typography fontWeight="bold" textAlign="center" sx={{ mt: 1, mb: 3 }}>
                  {user.name}
               </Typography>

               <ul className="list-none flex flex-col gap-1.5 px-2">
                  {dashboardNavLinks.map((dashLink) => (
                     <li key={dashLink.label}>
                        <Box component={Link} onClick={closeNav} href={dashLink.href} className="flex items-center gap-2">
                           <IconButton
                              sx={{
                                 border: pathname === dashLink.href ? "solid 1px" : "solid 1px transparent",
                                 bgcolor: "whitesmoke",
                                 "&:hover": { bgcolor: "divider" },
                              }}
                           >
                              {dashLink.icon}
                           </IconButton>
                           <Typography>{dashLink.label}</Typography>
                        </Box>
                     </li>
                  ))}

                  <div className="flex gap-2 items-center justify-center mt-7">
                     <li>
                        <IconButton
                           component={Link}
                           onClick={closeNav}
                           href="/inbox"
                           sx={{
                              border: pathname === "/inbox" ? "solid 1px" : "solid 1px transparent",

                              bgcolor: "whitesmoke",
                              "&:hover": { bgcolor: "divider" },
                           }}
                        >
                           <Badge color="primary" badgeContent={5} max={9}>
                              <Message />
                           </Badge>
                        </IconButton>
                     </li>

                     <li>
                        <IconButton
                           component={Link}
                           onClick={closeNav}
                           href="/settings"
                           sx={{
                              border: pathname === "/settings" ? "solid 1px" : "solid 1px transparent",

                              bgcolor: "whitesmoke",
                              "&:hover": { bgcolor: "divider" },
                           }}
                        >
                           <Settings />
                        </IconButton>
                     </li>
                  </div>
               </ul>
            </div>
         </Box>
      </Drawer>
   );
}
