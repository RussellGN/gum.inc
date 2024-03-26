import IncOfficeHero from "@/app/components/inc-office/IncOfficeHero";
import OptionCard from "@/app/components/inc-office/OptionCard";
import { researchBureauOptions } from "@/app/lib/constants";
import { ArrowRightAlt, KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Box, Button, FormGroup, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function Page() {
   return (
      <>
         <IncOfficeHero />

         <Box sx={{ px: 5, py: 8 }} className=" min-h-[60vh] my-5 ">
            <Box
               sx={{ backgroundColor: "secondary.main" }}
               className="border rounded-[40px] w-full shadow-xl  text-center pt-10 pb-[12rem]"
            >
               <Typography
                  variant="h1"
                  sx={{
                     width: "fit-content",
                     mx: "auto",
                     position: "relative",
                     "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "-12px",
                        height: "10px",
                        width: "50%",
                        left: "50%",
                        borderRadius: "10px",
                        transform: "translateX(-50%)",
                        background: "linear-gradient(to bottom right, white, whitesmoke)",
                        // backgroundColor: "divider",
                     },
                  }}
               >
                  Research Bureau Newsletter
               </Typography>
            </Box>

            <div className="w-[95%] mx-auto relative -top-[8rem] ">
               <Grid
                  container
                  gap={3}
                  alignItems="center"
                  justifyContent="center"
                  className="p-10 rounded-[40px] "
                  sx={{ background: "linear-gradient(to bottom, white, rgb(250, 250, 250))" }}
               >
                  <Grid item xs>
                     <Box sx={{ px: 2, pt: 2, backgroundColor: "secondary.light", borderRadius: "10px" }}>
                        <FormGroup sx={{ pb: 2 }} className="gap-2 max-h-[15rem] overflow-x-auto">
                           {researchBureauOptions.map((option, index) => (
                              <OptionCard key={index} index={index} option={option} />
                           ))}
                        </FormGroup>
                     </Box>
                  </Grid>

                  <Grid item xs={12} md={5}>
                     <div className="max-w-prose">
                        <Typography sx={{ mb: 1 }}>
                           Dive into the realm of business innovation with our Research Bureau Newsletter. Choose from a
                           variety of focus areas and receive curated insights and valuable updates to stay informed and
                           stay ahead
                        </Typography>
                        <Typography fontWeight="bold" className="flex items-center gap-2">
                           <KeyboardDoubleArrowRight fontSize="inherit" />
                           Select 3-30 to proceed (each at a price of £10)
                        </Typography>
                        <Typography fontWeight="bold" className="flex items-center gap-2">
                           <KeyboardDoubleArrowRight fontSize="inherit" />
                           Due Dillignce (All) for £30{" "}
                        </Typography>
                        <div className="flex items-center gap-3 mt-4 ">
                           <Button
                              component={Link}
                              href="/subscribe"
                              size="large"
                              color="primary"
                              endIcon={<ArrowRightAlt />}
                           >
                              Proceed To Subscription
                           </Button>
                           <Button>Read More</Button>
                        </div>
                     </div>
                  </Grid>
               </Grid>
            </div>
         </Box>
      </>
   );
}
