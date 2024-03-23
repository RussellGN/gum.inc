import AnimatedHeader from "./AnimatedHeader";
import Logo from "../general/Logo";
import { navLinks } from "@/app/lib/constants";
import NavLink from "../general/NavLink";
import AccessSelector from "./AccessSelector";
import SignupOrAvatar from "../general/SignupOrAvatar";

export default function Navbar() {
   return (
      <AnimatedHeader>
         <div className="flex justify-between items-center">
            <Logo />

            <nav>
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
            </nav>

            <div className="flex gap-3 items-center">
               <AccessSelector />
               <SignupOrAvatar />
            </div>
         </div>
      </AnimatedHeader>
   );
}
