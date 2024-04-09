import { UserInterface } from "@/app/interfaces";
import { capitalizeWords } from "@/app/lib/utils";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Members({ members, memberType }: { members: UserInterface[]; memberType: string }) {
   return (
      <Box sx={{ borderBottom: "solid", borderColor: "divider", py: 2 }}>
         <Typography variant="h4" sx={{ mb: 1 }}>
            {capitalizeWords(memberType)}
         </Typography>
         <Grid container spacing={1} wrap="nowrap" overflow="auto" sx={{ pb: 1 }}>
            {members.map((member) => (
               <Grid item xs={4.5} component={Link} href={`/inc-connect/user/${member.slug}`} key={member.name}>
                  <Box className="p-2 rounded-xl border flex flex-col items-center  gap-2 justify-around hover:bg-slate-100 ">
                     <Image
                        src={member.displayPhoto}
                        alt={member.name}
                        className="w-10 h-10 object-cover rounded-[100%] border shadow-md"
                     />
                     <div className="">
                        <Typography className="line-clamp-1 w-full text-center mb-0">{member.name}</Typography>
                        <Typography component="p" variant="caption" className="w-full text-center mb-0 line-clamp-1">
                           {member.jobTitle}
                        </Typography>
                     </div>
                  </Box>
               </Grid>
            ))}
         </Grid>
      </Box>
   );
}
