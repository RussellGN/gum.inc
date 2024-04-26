"use client";

import useIsMobile from "@/app/hooks/useIsMobile";
import { Close, Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import NavLink from "../general/NavLink";
import { navLinks } from "@/app/lib/constants";
import Logo from "../general/Logo";

export default function MobileNav() {
   const [open, setOpen] = useState(false);
   const isMobile = useIsMobile();

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   // if (isMobile) {
   //    return (
   //       <>
   //          <IconButton type="button" onClick={handleClickOpen} size="small" sx={{ mr: { xs: "0.375rem", md: 1 } }}>
   //             <Menu />
   //          </IconButton>

   //          <Dialog
   //             PaperProps={{
   //                sx: { borderRadius: "20px", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)" },
   //             }}
   //             fullWidth
   //             maxWidth="md"
   //             open={open}
   //             onClose={handleClose}
   //          >
   //             <div className="px-3 py-5 min-h-[50vh] flex items-center justify-center relative">
   //                <div className="absolute top-0 right-0 p-2 text-right">
   //                   <IconButton size="small" onClick={handleClose} type="button">
   //                      <Close />
   //                   </IconButton>
   //                </div>
   //                <Box className="w-full">
   //                   <Box component="nav">
   //                      <ul className="list-none flex flex-col items-center justify-center text-center gap-4">
   //                         {navLinks.map((navLink) => (
   //                            <li key={navLink.path}>
   //                               <NavLink
   //                                  onClick={handleClose}
   //                                  href={navLink.path}
   //                                  includes={navLink.path.includes("/inc-connect") ? "/inc-connect" : undefined}
   //                               >
   //                                  {navLink.label}
   //                               </NavLink>
   //                            </li>
   //                         ))}
   //                      </ul>
   //                   </Box>
   //                </Box>
   //             </div>
   //          </Dialog>
   //       </>
   //    );
   // }

   if (isMobile) {
      return (
         <>
            <IconButton type="button" onClick={handleClickOpen} size="small" sx={{ mr: { xs: "0.375rem", md: 1 } }}>
               <Menu />
            </IconButton>

            <Drawer anchor="top" open={open} onClose={handleClose}>
               <div className="px-3 py-5 min-h-[100vh] flex flex-col">
                  <div className="w-full p-2 flex items-center justify-between gap-3">
                     <div onClick={handleClose}>
                        <Logo />
                     </div>
                     <IconButton size="small" onClick={handleClose} type="button">
                        <Close />
                     </IconButton>
                  </div>

                  <div className="flex-grow flex items-center justify-center">
                     <Box className="w-full">
                        <Box component="nav">
                           <ul className="list-none flex flex-col items-center justify-center text-center gap-4">
                              {navLinks.map((navLink) => (
                                 <li key={navLink.path}>
                                    <NavLink
                                       onClick={handleClose}
                                       href={navLink.path}
                                       includes={navLink.path.includes("/inc-connect") ? "/inc-connect" : undefined}
                                    >
                                       {navLink.label}
                                    </NavLink>
                                 </li>
                              ))}
                           </ul>
                        </Box>
                     </Box>
                  </div>
               </div>
            </Drawer>

            {/* <Dialog
               PaperProps={{
                  sx: { borderRadius: "20px", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)" },
               }}
               fullWidth
               maxWidth="md"
               open={open}
               onClose={handleClose}
            >
               <div className="px-3 py-5 min-h-[50vh] flex items-center justify-center relative">
                  <div className="absolute top-0 right-0 p-2 text-right">
                     <IconButton size="small" onClick={handleClose} type="button">
                        <Close />
                     </IconButton>
                  </div>
                  <Box className="w-full">
                     <Box component="nav">
                        <ul className="list-none flex flex-col items-center justify-center text-center gap-4">
                           {navLinks.map((navLink) => (
                              <li key={navLink.path}>
                                 <NavLink
                                    onClick={handleClose}
                                    href={navLink.path}
                                    includes={navLink.path.includes("/inc-connect") ? "/inc-connect" : undefined}
                                 >
                                    {navLink.label}
                                 </NavLink>
                              </li>
                           ))}
                        </ul>
                     </Box>
                  </Box>
               </div>
            </Dialog> */}
         </>
      );
   }
}
