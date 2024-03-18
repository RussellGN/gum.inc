"use client";

import { SxProps, styled } from "@mui/material";
import Image, { StaticImageData } from "next/image";

type propTypes = {
   priority?: boolean;
   src: string | StaticImageData;
   quality?: number;
   width?: number;
   height?: number;
   alt: string;
   aspectRatio?: string;
   sx?: SxProps;
   nextImageProps?: object;
};

export default function AspectContainedNextImage({
   priority,
   src,
   quality,
   width,
   height,
   alt,
   sx,
   aspectRatio,
   nextImageProps,
}: propTypes) {
   return (
      <StyledImage
         {...nextImageProps}
         priority={priority}
         src={src}
         quality={quality}
         width={width || 1600}
         height={height || 900}
         alt={alt}
         sx={{
            width: "100%",
            height: "auto",
            aspectRatio: aspectRatio || "16 / 9",
            objectFit: "cover",
            ...sx,
         }}
      />
   );
}

const StyledImage = styled(Image)({});
