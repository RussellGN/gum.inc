import AnimatedHeader from "./AnimatedHeader";
import Logo from "../general/Logo";
import ukFlag from "@/app/assets/svgs/ukFlag.svg";
import { Button } from "@mui/material";
import { navLinks } from "@/app/lib/constants";
import NavLink from "../general/NavLink";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
   return (
      <AnimatedHeader>
         <div className="flex justify-between items-center">
            <Logo />

            <nav>
               <ul className="list-none flex gap-4">
                  {navLinks.map((navLink) => (
                     <li key={navLink.path}>
                        <NavLink href={navLink.path}>{navLink.label}</NavLink>
                     </li>
                  ))}
               </ul>
            </nav>

            <div className="flex gap-3 items-center">
               <Image
                  src={ukFlag}
                  alt={"current access' flag"}
                  width={35}
                  height={35}
                  className={`w-9 object-cover h-9 border shadow-md rounded-[100%] cursor-pointer`}
               />
               <Button component={Link} href="/auth/join">
                  Signup
               </Button>
            </div>
         </div>
      </AnimatedHeader>
   );
}
