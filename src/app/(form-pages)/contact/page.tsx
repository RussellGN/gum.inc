import DividerWithText from "@/app/components/general/DividerWithText";
import { Link as MuiLink, TextField, Typography, Button } from "@mui/material";

export default function Page() {
   return (
      <form>
         <Typography sx={{ mb: 3 }} variant="h2" textAlign="center">
            Get In Touch
         </Typography>

         <MuiLink
            fontWeight="bold"
            sx={{ display: "block", textAlign: "center", mb: 1 }}
            component="a"
            href="mailto:info@guminc.com"
         >
            Email - info@guminc.com
         </MuiLink>

         <DividerWithText text="or" />

         <div className="flex flex-col gap-5 py-4 px-3 md:py-5 md:px-5">
            <div className=" flex items-center gap-3">
               <div className="flex-grow">
                  <TextField
                     variant="filled"
                     size="small"
                     label="Your Email"
                     name="email"
                     type="email"
                     placeholder="example@example.com"
                     fullWidth
                     required
                     inputProps={{ min: 3, max: 50 }}
                     sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
                  />
               </div>
               <div className="flex-grow">
                  <TextField
                     variant="filled"
                     size="small"
                     label="Name"
                     name="name"
                     placeholder="Your name"
                     fullWidth
                     required
                     inputProps={{ min: 3, max: 50 }}
                     sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
                  />
               </div>
            </div>

            <TextField
               variant="filled"
               size="small"
               label="Subject"
               name="subject"
               placeholder="What is the nature of your email?"
               fullWidth
               required
               inputProps={{ min: 3, max: 50 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />
            <TextField
               variant="filled"
               size="small"
               label="Your Message"
               name="message"
               multiline
               rows={3}
               placeholder="Type your message..."
               fullWidth
               required
               inputProps={{ min: 2, max: 500 }}
               sx={{ "& .MuiInputBase-root": { borderRadius: "10px 10px 0 0" } }}
            />
         </div>

         <div className="text-right px-8">
            {/* <Button color="primary" type="submit"> */}
            <Button color="primary" type="button">
               Send
            </Button>
         </div>
      </form>
   );
}
