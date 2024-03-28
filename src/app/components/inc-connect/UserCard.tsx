import { LocationOn, Verified } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import AspectContainedNextImage from "../general/AspectContainedNextImage";
import Link from "next/link";
import { UserInterface } from "@/app/interfaces";
import SaveIncButton from "./SaveIncButton";

export default function UserCard({ user, simplifified }: { user: UserInterface; simplifified?: boolean }) {
   if (simplifified) {
      console.log("simplified");
   }
   return (
      <Box className="block border rounded-[15px] bg-white  ">
         <Box
            component={Link}
            href={`/inc-connect/user/${user.slug}`}
            className="block border pb-2 border-b-0 border-[transparent] rounded-tl-[15px] rounded-tr-[15px] cursor-pointer transition-all hover:border-slate-400 hover:bg-slate-50"
         >
            <Grid container gap={1} justifyContent="space-between" className="p-1.5 ">
               <Grid item xs zeroMinWidth>
                  <Typography fontWeight="bold" noWrap sx={{ textDecoration: "underline" }}>
                     {user.name}
                  </Typography>
                  <Typography variant="caption" noWrap component="p">
                     {user.jobTitle}
                  </Typography>
               </Grid>
               <Grid item xs="auto">
                  <Verified fontSize="small" />
               </Grid>
            </Grid>

            <AspectContainedNextImage src={user.displayPhoto} alt={user.name} aspectRatio="3 / 2" />
            <div className="p-2 pb-0">
               <Typography component="p" variant="caption" color="grey" className="line-clamp-2">
                  {user.bio}
               </Typography>
            </div>
         </Box>
         <Box className="p-2 pt-0">
            <div className="flex items-center justify-between gap-3 border-t-2">
               <Typography noWrap className="flex-grow">
                  <LocationOn fontSize="inherit" sx={{ mr: 0.2, mt: -0.2 }} />
                  {user.location}
               </Typography>

               <SaveIncButton />
            </div>
         </Box>
      </Box>
   );
}
