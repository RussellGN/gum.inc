import ResponsiveTypography from "@/app/components/general/ResponsiveTypography";
import IncOfficeHero from "@/app/components/inc-office/IncOfficeHero";
import ResearchBureauNewsletterForm from "@/app/components/inc-office/ResearchBureauNewsletterForm";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function Page() {
   return (
      <>
         <IncOfficeHero />

         <Box sx={{ px: { md: 5 }, py: 8 }} className=" min-h-[60vh] my-5 ">
            <Box className="bg-white border-4 rounded-[30px] w-full shadow-xl pt-10 pb-[12rem]">
               <ResponsiveTypography
                  mobileVariant="h2"
                  desktopVariant="h1"
                  sx={{
                     px: 2,
                     textAlign: "center",
                     width: "fit-content",
                     mx: "auto",
                     position: "relative",
                     "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "-15px",
                        height: "10px",
                        width: "40%",
                        left: "50%",
                        borderRadius: "10px",
                        transform: "translateX(-50%)",
                        backgroundColor: "divider",
                     },
                  }}
               >
                  Research Bureau Newsletter
               </ResponsiveTypography>
            </Box>

            <Box
               sx={{
                  p: { xs: 2, md: 5 },
                  py: { xs: 3, md: 5 },
                  width: { xs: "90%", md: "96%" },
                  borderRadius: { xs: "15px", md: "30px" },
               }}
               className="bg-[whitesmoke] border-4 shadow-xl mx-auto relative -top-[8rem] "
            >
               <Typography sx={{ mb: 2 }}>
                  Dive into the realm of business innovation with our Research Bureau Newsletter. Choose from a variety of
                  focus areas and receive curated insights and valuable updates to stay informed and stay ahead
               </Typography>

               <Box sx={{ mb: 4, flexWrap: { xs: "wrap", md: "unset" } }} className="flex gap-3 items-center">
                  <Typography fontWeight="bold" className="flex items-center gap-2">
                     <KeyboardDoubleArrowRight fontSize="inherit" />
                     Select 3-30 to proceed (each at a price of £10)
                  </Typography>
                  <Typography fontWeight="bold" className="flex items-center gap-2">
                     <KeyboardDoubleArrowRight fontSize="inherit" />
                     Due Dillignce (All) for £30{" "}
                  </Typography>
               </Box>

               <ResearchBureauNewsletterForm />
            </Box>
         </Box>
      </>
   );
}
