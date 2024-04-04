import { sampleUsers } from "@/app/lib/sampleData";
import { Bookmarks, CheckCircleOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Image from "next/image";
import UncontolledSlideshow from "../general/UncontolledSlideshow";

export default function GridItem2() {
   const users = sampleUsers.splice(7, 2);

   const slides = [
      <div key="item2-slide1" className="h-full w-full flex justify-around gap-3 p-2">
         {users.map((user) => (
            <div key={user.id} className="flex flex-col items-center justify-around gap-0.5">
               <Image
                  src={user.displayPhoto}
                  alt={user.name}
                  className="w-10 h-10 bg-slate-50 object-cover rounded-[100%] border border-gray-500 shadow-lg"
               />
               <Typography className="mb-0" noWrap variant="subtitle2">
                  {user.name}
               </Typography>

               <Typography variant="caption" className="flex gap-2 items-center justify-center">
                  Saved
                  <CheckCircleOutlined fontSize="small" />
               </Typography>
            </div>
         ))}
      </div>,

      <div key="item2-slide2" className="h-full w-full flex justify-around gap-3">
         <div className="bg-white h-full px-2 flex flex-col items-center justify-center gap-2 text-center border rounded-[10px] ">
            <Bookmarks />
            <Typography fontWeight="bold">Bookmark Listings For Later Preview</Typography>
         </div>
      </div>,
   ];

   return (
      <div className="col-span-3 row-span-1 flex items-center p-1">
         <UncontolledSlideshow interval={7000} slides={slides} />
      </div>
   );
}
