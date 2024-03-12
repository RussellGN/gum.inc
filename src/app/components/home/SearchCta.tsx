import images from "@/app/assets";
import { primaryColor, secondaryColor } from "@/app/lib/constants";
import { Search } from "@mui/icons-material";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

export default function SearchCta() {
   return (
      <div className="min-h-[70vh] flex items-center">
         <Box
            className="py-20 w-full  flex flex-col items-center justify-center gap-3 relative"
            // sx={{
            //    backgroundImage: `url(${(images.layered_waves_haikei_4 as StaticImageData).src})`,
            //    backgroundRepeat: "no-repeat",
            //    backgroundPosition: "center",
            //    backgroundSize: "cover",
            // }}
         >
            <Image
               src={images.blob1}
               alt=""
               className="w-full absolute  top-1/2 -right-20 -z-10"
               style={{ transform: "translateY(-50%) rotateY(180deg)" }}
            />
            <Box
               className="shadow-xl"
               sx={{
                  position: "absolute",
                  top: "-1rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "white",
                  border: "solid 2px",
                  borderColor: "divider",
                  borderRadius: "20px",
                  px: 4,
                  py: 1,
               }}
            >
               <Typography variant="h2">Already know what you&apos;re looking for?</Typography>
            </Box>
            {/* <Typography variant="h2">Lorem ipsum dolor sit amet</Typography> */}
            <Typography className="max-w-prose text-center">
               Use our smart-search to quickly <br />
               find what you&apos;re looking for, or navigate to <Link href="/connect">Inc Connect</Link> <br /> and start
               discovering
            </Typography>

            {/* <div className="w-1/2 mt-5">
               <TextField
                  color="secondary"
                  variant="filled"
                  fullWidth
                  label="Search"
                  placeholder="people, businesses and others..."
                  sx={{ "& .MuiInputBase-root": { borderRadius: "20px 20px 0 0" } }}
               />
            </div> */}
            <div className="w-1/2 mt-5 flex">
               <input
                  className="flex-grow"
                  color="secondary"
                  name="q"
                  type="search"
                  placeholder="Search people, businesses and more..."
                  style={{
                     borderRadius: "50px 0 0 50px ",
                     border: "solid thin",
                     borderColor: primaryColor,
                     boxShadow: "none",
                     textAlign: "center",
                     padding: "1rem 2rem ",
                  }}
               />
               <Button
                  color="primary"
                  sx={{
                     border: "solid thin",
                     borderColor: primaryColor,
                     borderRadius: "0 50px 50px 0",
                  }}
               >
                  <Search />
               </Button>
            </div>
         </Box>
      </div>
   );
}
