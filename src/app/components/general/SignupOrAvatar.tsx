import { sampleUsers } from "@/app/lib/sampleData";
import { generateAvatarLetters } from "@/app/lib/utils";
import { Avatar, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function SignupOrAvatar() {
   // const user = sampleUsers.find((sampleUser) => sampleUser.slug === slug);
   const user = sampleUsers[1];

   if (!user) throw new Error("User not found");

   const isAuthenticated = true;

   if (!isAuthenticated)
      return (
         <Button component={Link} href="/signup">
            Signup
         </Button>
      );

   return (
      <Avatar
         component={Link}
         href="/dashboard"
         title="go to dashboard"
         alt={user.name}
         sx={{
            // pointerEvents: isPending ? "none" : "initial",
            border: "solid 1px",
            color: "white",
            cursor: "pointer",
            transition: "all 0.1s",
         }}
      >
         {generateAvatarLetters(user.name)}
      </Avatar>
   );
}
