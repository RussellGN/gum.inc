import SearchAndControls from "@/app/components/inc-connect/SearchAndControls";
import UserCard from "@/app/components/inc-connect/UserCard";
import { sampleUsers } from "@/app/lib/sampleData";
import { Box, Pagination } from "@mui/material";

export default function page() {
   return (
      <Box sx={{ px: 5 }}>
         <SearchAndControls />
         <div className="grid grid-cols-5 gap-2 ">
            {sampleUsers.map((user) => (
               <UserCard key={user.slug} user={user} />
            ))}
         </div>
         <Pagination page={1} count={5} className="w-fit mx-auto my-[5rem]" />
      </Box>
   );
}
