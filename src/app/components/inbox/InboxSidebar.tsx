import { Box, Typography } from "@mui/material";
import GoBackBtn from "../general/GoBackBtn";
import { sampleChats, sampleMessages } from "@/app/lib/sampleData";
import Image from "next/image";
import Link from "next/link";

export default function InboxSidebar() {
   return (
      <Box className="h-[80vh] overflow-y-auto border rounded-[15px] bg-white  px-4 py-8 sticky top-[100px]">
         <div className="flex items-center justify-between gap-2">
            <GoBackBtn noMarginBottom />
            <Typography variant="h5">Inbox</Typography>
         </div>

         <Box sx={{ mt: 3 }}>
            {sampleChats.map((chat) => {
               const messages = sampleMessages.filter((msg) => msg.chat.id === chat.id);
               if (!messages.length) return;
               const lastMessage = messages[messages.length - 1];
               return (
                  <Box
                     key={chat.id}
                     component={Link}
                     href={`/inbox/${chat.chatRespondend.slug}?type=${chat.chatRespondend.type}`}
                     className="border-b-2 flex items-center gap-2 py-2 px-1 hover:bg-slate-50"
                  >
                     <Image
                        src={chat.chatRespondend.displayPhoto}
                        alt={chat.chatRespondend.name}
                        className="w-8 h-8 object-cover rounded-[100%] border "
                     />
                     <div className="mr-auto flex flex-col gap-0">
                        <Typography
                           fontWeight={!lastMessage.opened ? "bold" : "normal"}
                           className="line-clamp-1"
                           variant="subtitle1"
                        >
                           {chat.chatRespondend.name}
                        </Typography>
                        <Typography className="line-clamp-1 pr-2" variant="caption">
                           {lastMessage.body}
                        </Typography>
                     </div>
                     <div className="flex items-center gap-1">
                        {!lastMessage.opened && (
                           <Box className="w-2 h-2 mr-2 rounded-full" sx={{ bgcolor: "primary.main" }} />
                        )}
                        {/* <Typography variant="caption">{friendlyDate(lastMessage.date)}</Typography> */}
                     </div>
                  </Box>
               );
            })}
         </Box>
      </Box>
   );
}
