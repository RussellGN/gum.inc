import images from "@/app/assets";
import { Check, LocationOn, Mail, Verified, Work } from "@mui/icons-material";
import { Badge, Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function Hero() {
   return (
      <Grid container alignItems="center" justifyContent="center" sx={{ minHeight: "80vh" }}>
         <Grid item xs md="auto">
            <Box sx={{ pr: { md: 5 } }}>
               <Typography variant="h1">
                  Discover, Connect <br /> and{" "}
                  <Box component="span" sx={{ color: "primary.light" }}>
                     Grow
                  </Box>
               </Typography>
               <Typography className="max-w-[15rem] py-3">
                  Lorem ipsum dolor sit amet. Illum vero corrupti molestiae?
                  <br />
               </Typography>
               <Button>Get Started</Button>
            </Box>
         </Grid>

         <Grid item xs md={5}>
            <Box
               sx={{
                  // border: "solid 1px grey",
                  display: "grid",
                  gap: 0.5,
                  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
                  // gridTemplateRows: "1fr 1fr 1fr",
                  gridTemplateRows: "7rem 7rem 7rem",
               }}
            >
               <HeroAnimationGrid />
            </Box>
         </Grid>
      </Grid>
   );
}

function HeroAnimationGrid() {
   return (
      <>
         <div className="bg-white col-span-3 row-span-2 flex items-center border rounded-md shadow-md ">
            <div>
               <div className="flex items-center px-2">
                  <Image src={images.userm} alt="user" className="w-9 h-9 object-cover rounded-[100%] border shadow-md" />
                  <div className="mr-auto ml-2">
                     <Typography variant="caption">Will Cosby</Typography>
                  </div>
                  <Verified fontSize="small" />
               </div>
               <div className="flex gap-3 flex-wrap pt-4 px-4">
                  <Box sx={{ bgcolor: "divider", width: "10%", height: "0.4rem", m: 0.05 }}></Box>
                  <Box sx={{ bgcolor: "divider", width: "40%", height: "0.4rem", m: 0.05 }}></Box>
                  <Box sx={{ bgcolor: "divider", width: "60%", height: "0.4rem", m: 0.05 }}></Box>
                  <Box sx={{ bgcolor: "divider", width: "30%", height: "0.4rem", m: 0.05 }}></Box>
                  <Box sx={{ bgcolor: "divider", width: "80%", height: "0.4rem", m: 0.05 }}></Box>
                  <Box sx={{ bgcolor: "divider", width: "10%", height: "0.4rem", m: 0.05 }}></Box>
                  <Box sx={{ bgcolor: "divider", width: "50%", height: "0.4rem", m: 0.05 }}></Box>
               </div>
               <div className="flex gap-3 justify-around p-4">
                  <Typography className="border rounded-md flex items-center gap-2 p-1 justify-center text-center">
                     <LocationOn /> Ipswich
                  </Typography>
                  <Typography className="border rounded-md flex  items-center gap-2 p-1 justify-center text-center">
                     <Work />
                     Finance
                  </Typography>
               </div>
            </div>
         </div>

         <div className="bg-white col-span-3 row-span-1 flex items-center border rounded-md shadow-md ">
            <div className="p-2 w-full flex justify-around gap-3">
               <div className="flex flex-col items-center justify-around">
                  <Image src={images.user5m} alt="user" className="w-9 h-9 object-cover rounded-[100%] border shadow-md" />
                  <Typography className="mb-0" variant="caption">
                     Raj Khamat
                  </Typography>
                  <Typography
                     variant="caption"
                     sx={{ bgcolor: "divider", px: 1, display: "flex", gap: 1, alignItems: "center", borderRadius: "10px" }}
                  >
                     Saved
                     <Check fontSize="inherit" />
                  </Typography>
               </div>

               <div className="flex flex-col items-center justify-around">
                  <Image src={images.person2m} alt="user" className="w-9 h-9 object-cover rounded-full border shadow-md" />
                  <Typography className="mb-0" variant="caption">
                     John Ruiberg
                  </Typography>
                  <Typography
                     variant="caption"
                     sx={{ bgcolor: "divider", px: 1, display: "flex", gap: 1, alignItems: "center", borderRadius: "10px" }}
                  >
                     Saved
                     <Check fontSize="inherit" />
                  </Typography>
               </div>
            </div>
         </div>

         <div className="bg-white col-span-1 row-span-1 flex items-center border rounded-md shadow-md  p-1">
            <Box
               className="p-2 flex items-center justify-center rounded-md h-full"
               // sx={{ backgroundColor: "primary.light" }}
            >
               <Badge badgeContent={4} color="secondary">
                  <Mail fontSize="large" />
               </Badge>
            </Box>
         </div>

         <div className="bg-white col-span-2 row-span-2 flex items-center border rounded-md shadow-md ">
            <div className="h-full p-2">
               <Image
                  src="/svgs/undraw_predictive_analytics.svg"
                  width={160}
                  height={90}
                  alt="connecting"
                  className="h-full"
               />
            </div>
         </div>

         <div className="bg-white col-span-4 row-span-2 flex items-center border rounded-md shadow-md ">
            <div className="p-2 h-full">
               <div className="rounded-md flex gap-3 justify-between  h-full">
                  <Image src={images.firm} alt={"art shop"} className="rounded-md h-full w-1/3 block object-cover" />

                  <div className="flex-grow">
                     <p>Centrury law firm</p>
                     <div className="flex gap-3 flex-wrap p-1">
                        <Box sx={{ bgcolor: "divider", width: "80%", height: "0.4rem", m: 0.05 }}></Box>
                        <Box sx={{ bgcolor: "divider", width: "10%", height: "0.4rem", m: 0.05 }}></Box>
                        <Box sx={{ bgcolor: "divider", width: "30%", height: "0.5rem", m: 0.05 }}></Box>
                        <Box sx={{ bgcolor: "divider", width: "50%", height: "0.4rem", m: 0.05 }}></Box>
                        <Box sx={{ bgcolor: "divider", width: "80%", height: "0.4rem", m: 0.05 }}></Box>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
