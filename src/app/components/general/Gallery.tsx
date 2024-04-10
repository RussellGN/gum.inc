import { Box, Typography } from "@mui/material";
import AspectContainedNextImage from "./AspectContainedNextImage";
import { StaticImageData } from "next/image";
import ImageViewer from "./ImageViewer";

export default function Gallery({ images }: { images: (string | StaticImageData)[] }) {
   return (
      <Box sx={{ borderBottom: "solid", borderColor: "divider", py: 2 }}>
         <Typography variant="h4" sx={{ mb: 1 }}>
            Gallery
         </Typography>
         <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((img, index) => (
               <div key={"img-" + index} className="w-6/12 flex-shrink-0 relative">
                  <AspectContainedNextImage
                     src={img}
                     alt="gallery image"
                     sx={{ border: "solid 2px", borderColor: "rgb(180,180,180)", borderRadius: "10px" }}
                     aspectRatio="3 / 2"
                  />
                  <ImageViewer image={img} alt="gallery image" />
               </div>
            ))}
         </div>
      </Box>
   );
}
