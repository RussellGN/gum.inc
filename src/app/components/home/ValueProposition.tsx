import images from "@/app/assets";
import { ArrowRightAlt, Search, Send } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function ValueProposition() {
   return (
      <Grid container alignItems="center" justifyContent="center" className="min-h-[90vh]">
         <Grid item xs md={5}>
            <Box className="h-full  p-5 relative flex items-center justify-center">
               <Box className="flex py-1 justify-center h-[28rem] bg-gray-200 border-gray-200 border-4 rounded-[20px]  shadow-md relative">
                  <Image
                     src={images.inc_user_page_screenshot}
                     alt="screenshot of a user's page on the platform"
                     className="w-auto h-full rounded-[20px]"
                  />
                  <Box
                     sx={{ backgroundColor: "primary.light" }}
                     className="border h-[25rem] w-[15rem]  rounded-lg shadow-md absolute top-[-3rem] -right-1/4 rotate-6 -z-10"
                  ></Box>

                  <Box className="bg-white border rounded-lg shadow-md absolute top-1/4 -left-full">
                     <div className="py-1 px-2 border gap-4 flex items-center justify-around">
                        <div className="flex items-center gap-2">
                           <Search fontSize="small" />
                           <Typography variant="subtitle1">Tax Lawyer, London</Typography>
                        </div>
                        <Typography variant="caption" className="bg-gray-200 border rounded-lg px-2">
                           found 32
                        </Typography>
                     </div>
                  </Box>

                  <Box className="bg-white border rounded-lg shadow-md absolute bottom-[3rem] -right-3/4">
                     <div className="flex items-center gap-3 py-1 px-2">
                        <Image
                           src={images.person2m}
                           alt="user"
                           className="w-10 h-10 object-cover rounded-[100%] border-2 shadow-md"
                        />
                        <div className="mr-auto flex flex-col gap-0">
                           <Typography variant="subtitle1">Aaron Rhodes</Typography>
                           <Typography variant="caption">Tax Lawyer</Typography>
                        </div>
                        <Send fontSize="small" />
                     </div>
                  </Box>
               </Box>
            </Box>
         </Grid>

         <Grid item xs md={5} sx={{ pl: { md: 8 } }}>
            <Box sx={{ pr: { md: 5 } }}>
               <Typography variant="h2">Yellow pages done right</Typography>
               <Typography className="max-w-prose py-3">
                  GUM.INC brings together businesses, proffessionals, creatives and other entities onto one platform for
                  easy discovery and connecting
               </Typography>
               <Button component={Link} href="/inc-connect" endIcon={<ArrowRightAlt />}>
                  Start Exploring
               </Button>
            </Box>
         </Grid>
      </Grid>
   );
}
