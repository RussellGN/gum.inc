import JoinCard from "@/app/components/inc-connect/JoinCard";
import SearchAndControls from "@/app/components/inc-connect/SearchAndControls";
import Sidebar from "@/app/components/inc-connect/Sidebar";
import UserCard from "@/app/components/inc-connect/UserCard";
import { sampleUsers } from "@/app/lib/sampleData";
import { Box, Grid, Pagination } from "@mui/material";

export default function Page() {
   return (
      <>
         {/* <Explainer /> */}
         <Grid container gap={3}>
            <Sidebar />
            <Grid item xs md>
               <Box>
                  <SearchAndControls />
                  <div className="grid grid-cols-5 gap-2 ">
                     <JoinCard directory="Gummy Pages" />
                     {sampleUsers.map((user) => (
                        <UserCard key={user.slug} user={user} />
                     ))}
                  </div>
                  <Pagination page={1} count={5} className="w-fit mx-auto my-[5rem]" />
               </Box>
            </Grid>
         </Grid>
      </>
   );
}
