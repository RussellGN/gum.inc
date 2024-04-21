import { MessageInterface } from "@/app/interfaces";
import { sampleChats, sampleMessages } from "@/app/lib/sampleData";
import { friendlyDate } from "@/app/lib/utils";
import { Send, DeleteOutlined, TimerOutlined } from "@mui/icons-material";
import { Link as MuiLink, Box, IconButton, Typography, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type propTypes = { params: { slug: string }; searchParams: { type: string } };

export default function Page({ params: { slug }, searchParams: { type } }: propTypes) {
   const chat = sampleChats.find((chat) => chat.chatRespondend.slug === slug) || sampleChats[0];
   const messages = sampleMessages.filter((msg) => msg.chat.id === chat.id);
   console.log(type); // to shut TS up

   return (
      <Box sx={{ height: { xs: "70vh", md: "100%" } }} className="flex flex-col">
         <Box className="w-full flex items-center gap-3 mb-4">
            <Image
               src={chat.chatRespondend.displayPhoto}
               alt={chat.chatRespondend.name}
               className="w-[3rem] h-[3rem] object-cover rounded-[100%] border"
            />
            <div className=" mr-auto">
               <MuiLink
                  underline="always"
                  component={Link}
                  href={`/inc/connect/${chat.chatRespondend.slug}`}
                  className="line-clamp-2"
               >
                  {chat.chatRespondend.name}
               </MuiLink>
            </div>

            <IconButton title="Delete Chat?" color="error">
               <DeleteOutlined />
            </IconButton>
         </Box>

         <Box
            sx={{ mx: { xs: -1, md: "unset" }, p: { xs: 1, md: 2 } }}
            className="border h-full flex-grow rounded-lg flex flex-col gap-3 overflow-y-auto"
         >
            {messages.map((message, index) => (
               <MessageComponent key={message.id} message={message} index={index} />
            ))}
         </Box>

         <form className="flex items-center gap-3 mt-4">
            <TextField
               // variant="filled"
               size="small"
               label="Message"
               name="message"
               multiline
               rows={2}
               placeholder="Type your message here..."
               fullWidth
               required
               inputProps={{ min: 1, max: 200 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px" } }}
            />
            <IconButton type="submit">
               <Send />
            </IconButton>
         </form>
      </Box>
   );
}

function MessageComponent({ message, index }: { message: MessageInterface; index: number }) {
   const isOddChild = index % 2 === 0;
   return (
      <Box
         sx={{
            borderRadius: isOddChild ? "20px 20px 20px 0" : "20px 20px 0 20px",
            bgcolor: isOddChild ? "whitesmoke" : "white",
            textAlign: isOddChild ? "left" : "right",
            ml: isOddChild ? 0 : "auto",
            maxWidth: { xs: "80%", md: "45%" },
         }}
         className="border w-fit p-3"
      >
         <Typography sx={{ mb: { xs: 1, md: 2 } }}>{message.body}</Typography>
         <Typography
            variant="subtitle2"
            className={`text-gray-400 flex items-center gap-2 ${isOddChild ? "justify-start" : "justify-end"}`}
         >
            <TimerOutlined fontSize="inherit" sx={{ mt: -0.2 }} />
            {friendlyDate(message.date)}
         </Typography>
      </Box>
   );
}
