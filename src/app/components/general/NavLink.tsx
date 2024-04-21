"use client";

import Link from "next/link";
import { Link as MuiLink, SxProps, useTheme } from "@mui/material";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type propTypes = {
   href: string;
   children: ReactNode;
   includes?: string;
   sx?: SxProps;
   onClick?: () => void;
};

export default function NavLink({ href, children, includes, sx, onClick }: propTypes) {
   const pathname = usePathname();
   const theme = useTheme();

   let active: boolean = false;
   if (includes) active = pathname.includes(includes);
   else active = pathname === href;

   return (
      <MuiLink
         component={Link}
         href={href}
         onClick={onClick}
         sx={{
            textDecoration: "none",
            color: "inherit",
            position: "relative",
            "&::after": {
               content: "''",
               position: "absolute",
               bottom: "-4px",
               left: "50%",
               height: "2px",
               width: active ? "70%" : 0,
               transform: "translateX(-50%)",
               borderRadius: "10px",
               transition: "all 0.2s",
               backgroundColor: theme.palette.text.primary,
            },
            "&:hover::after": {
               width: "70%",
            },
            ...sx,
         }}
      >
         {children}
      </MuiLink>
   );
}
