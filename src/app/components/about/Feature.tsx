import { Box, Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

type propTypes = {
   image: string | StaticImageData;
   alt: string;
   title?: string;
   body: string;
   direction: "left" | "right";
   minHeight?: string;
};

export default function Feature({ image, alt, title, body, direction, minHeight }: propTypes) {
   return (
      <Box className={`min-h-[${minHeight || "80vh"}] mb-20 flex items-center justify-center`}>
         <Grid container alignItems="center" justifyContent="center" gap={{ xs: 5, md: 10 }} sx={{ width: "100%" }}>
            <Grid item order={{ md: direction === "left" ? 1 : 2 }} xs={12} md={4}>
               <Box
                  sx={{
                     px: { xs: "10%", md: "unset" },
                  }}
               >
                  <Box
                     sx={{
                        position: "relative",
                        "&::before": {
                           content: "''",
                           position: "absolute",
                           bottom: {
                              xs: direction === "left" ? "-1rem" : "unset",
                              md: direction === "left" ? "-2rem" : "unset",
                           },
                           top: {
                              xs: direction === "right" ? "-1rem" : "unset",
                              md: direction === "right" ? "-2rem" : "unset",
                           },
                           left: {
                              xs: direction === "left" ? "-1rem" : "unset",
                              md: direction === "left" ? "-2rem" : "unset",
                           },
                           right: {
                              xs: direction === "right" ? "-1rem" : "unset",
                              md: direction === "right" ? "-2rem" : "unset",
                           },
                           width: "100%",
                           height: "100%",
                           borderRadius: "15px",
                           backgroundColor: "rgb(220,220,220)",
                           zIndex: -1,
                           transform: {
                              xs: direction === "right" ? "rotateZ(5deg)" : "rotateZ(-5deg)",
                              md: direction === "right" ? "rotateZ(10deg)" : "rotateZ(-10deg)",
                           },
                        },
                     }}
                  >
                     <Image
                        src={image}
                        width={160}
                        height={90}
                        alt={alt}
                        className="w-full bg-[white] p-6 rounded-[15px] h-auto border"
                     />
                  </Box>
               </Box>
            </Grid>

            <Grid item order={{ md: direction === "left" ? 2 : 1 }} xs={12} md="auto">
               <Box>
                  {title && <Typography variant="h2">{title}</Typography>}
                  <Typography className="max-w-[25rem] py-3">{body} </Typography>
               </Box>
            </Grid>
         </Grid>
      </Box>
   );
}
