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
      <Grid
         container
         alignItems="center"
         justifyContent="center"
         gap={10}
         className={`min-h-[${minHeight || "80vh"}] mb-20`}
      >
         <Grid item order={direction === "left" ? 1 : 2} xs md={4}>
            <Box
               sx={{
                  position: "relative",
                  "&::before": {
                     content: "''",
                     position: "absolute",
                     // bottom: "-2rem",
                     bottom: direction === "left" ? "-2rem" : "unset",
                     top: direction === "right" ? "-2rem" : "unset",
                     left: direction === "left" ? "-2rem" : "unset",
                     right: direction === "right" ? "-2rem" : "unset",
                     width: "100%",
                     height: "100%",
                     borderRadius: "15px",
                     backgroundColor: "rgb(220,220,220)",
                     zIndex: -1,
                     transform: direction === "right" ? "rotateZ(10deg)" : "rotateZ(-10deg)",
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
         </Grid>

         <Grid item order={direction === "left" ? 2 : 1} xs md="auto">
            <Box>
               {title && <Typography variant="h2">{title}</Typography>}
               <Typography className="max-w-[25rem] py-3">{body} </Typography>
            </Box>
         </Grid>
      </Grid>
   );
}
