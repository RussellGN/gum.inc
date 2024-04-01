import AnimatedHeader from "./AnimatedHeader";
import Logo from "../general/Logo";
import { navLinks } from "@/app/lib/constants";
import NavLink from "../general/NavLink";
import AccessSelector from "./AccessSelector";
import SignupOrAvatar from "../general/SignupOrAvatar";
import { Box } from "@mui/material";
import MobileNav from "./MobileNav";

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
               <AccessSelector />
               <SignupOrAvatar />
            </div>
         </Box>
      </AnimatedHeader>
   );
}
