import AnimatedHeader from "./AnimatedHeader";
import Logo from "../general/Logo";
import { navLinks } from "@/app/lib/constants";
import NavLink from "../general/NavLink";
import AccessSelector from "./AccessSelector";
import SignupOrAvatar from "../general/SignupOrAvatar";
import { Box } from "@mui/material";
import MobileNav from "./MobileNav";
import { Suspense } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function Navbar() {
   return (
      <AnimatedHeader>
         <Box sx={{ display: "flex", justifyContent: { md: "space-between" }, alignItems: "center" }}>
            <MobileNav />

            <Box sx={{ mr: { xs: "auto", md: 0 } }}>
               <Logo />
            </Box>

            <Box component="nav" sx={{ display: { xs: "none", md: "unset" } }}>
               <ul className="list-none flex gap-4">
                  {navLinks.map((navLink) => (
                     <li key={navLink.path}>
                        <NavLink
                           href={navLink.path}
                           includes={navLink.path.includes("/inc-connect") ? "/inc-connect" : undefined}
                        >
                           {navLink.label}
                        </NavLink>
                     </li>
                  ))}
               </ul>
            </Box>

            <div className="flex gap-3 items-center">
               <Suspense
                  fallback={
                     <div className="flex gap-1 items-center border rounded-[20px] px-1 py-0.5 bg-gray-100">
                        <div className="w-7 h-7 bg-gray-200 rounded-[100%]" />
                        <KeyboardArrowDown />
                     </div>
                  }
               >
                  <AccessSelector />
               </Suspense>
               <SignupOrAvatar />
            </div>
         </Box>
      </AnimatedHeader>
   );
}
