import images from "@/app/assets";
import {
   ArrowRightAlt,
   BookmarkAdd,
   BookmarkAddOutlined,
   LocationOn,
   Verified,
   VerifiedOutlined,
} from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import AspectContainedNextImage from "../general/AspectContainedNextImage";
import Link from "next/link";
import { UserInterface } from "@/app/interfaces";
import SaveIncButton from "./SaveIncButton";

export default function UserCard({ user, simplifified }: { user: UserInterface; simplifified?: boolean }) {
   return (
      <Box className="block border rounded-[15px] bg-white  ">
         <Box
            component={Link}
            href={`/inc-connect/${user.slug}`}
            className="block border pb-2 border-b-0 border-[transparent] rounded-tl-[15px] rounded-tr-[15px] cursor-pointer transition-all hover:border-slate-400 hover:bg-slate-50"
         >
            <Grid container gap={1} justifyContent="space-between" className="p-1.5 ">
               <Grid item xs zeroMinWidth>
                  <Typography fontWeight="bold" noWrap sx={{ textDecoration: "underline" }}>
                     {user.name}
                  </Typography>
                  <Typography variant="caption" component="div">
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

// export default function UserCard() {

//    return (
//       <div className="bg-[whitesmoke]  border rounded-md shadow-md ">
//          <div className="p-1">
//             <div className="flex gap-3 items-center px-2">
//                <Image src={images.user1} alt="user" className="w-9 h-9 object-cover rounded-[100%] border shadow-md" />
//                <div className="mr-auto ml-2">
//                   <Typography variant="caption">Will Cosby</Typography>
//                </div>
//                <Verified fontSize="small" />
//             </div>

//             <div className="flex gap-3 flex-wrap pt-4 px-4">
//                <Box sx={{ bgcolor: "divider", width: "10%", height: "0.4rem", m: 0.05 }}></Box>
//                <Box sx={{ bgcolor: "divider", width: "40%", height: "0.4rem", m: 0.05 }}></Box>
//                <Box sx={{ bgcolor: "divider", width: "60%", height: "0.4rem", m: 0.05 }}></Box>
//                <Box sx={{ bgcolor: "divider", width: "30%", height: "0.4rem", m: 0.05 }}></Box>
//                <Box sx={{ bgcolor: "divider", width: "80%", height: "0.4rem", m: 0.05 }}></Box>
//                <Box sx={{ bgcolor: "divider", width: "10%", height: "0.4rem", m: 0.05 }}></Box>
//                <Box sx={{ bgcolor: "divider", width: "50%", height: "0.4rem", m: 0.05 }}></Box>
//             </div>

//             <div className="flex gap-2 justify-around mt-4 px-2">
//                <Typography variant="subtitle1" className=" flex items-center gap-2 p-1 justify-center text-center">
//                   <LocationOn /> Ipswich
//                </Typography>
//                <IconButton color="secondary" size="small">
//                   <Message />
//                </IconButton>
//             </div>
//          </div>
//       </div>
//    );
// }
