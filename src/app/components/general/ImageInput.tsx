"use client";

import { Add, DeleteOutlined } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React, { useRef, useState } from "react";

export default function ImageInput({ name, defaultImage }: { name: string; defaultImage?: string }) {
   const [key, setKey] = useState(1); // fixes onchange trigger inability bug when imageurl is reset
   const [imageUrl, setImageUrl] = useState(defaultImage || "");
   const inputRef = useRef<HTMLInputElement>(null);

   function onChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (!e.target.files?.length) return;
      const url = URL.createObjectURL(e.target.files[0]);
      setImageUrl(url);
   }
   function onClick() {
      if (imageUrl) {
         setImageUrl("");
         setKey((prev) => prev + 1);
      } else {
         inputRef.current?.click();
      }
   }

   return (
      <Box
         className="w-full aspect-video relative  border rounded-[10px]"
         sx={{
            background: imageUrl ? `url('${imageUrl}')` : "white",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
         }}
      >
         <IconButton
            onClick={onClick}
            sx={{
               position: "absolute",
               top: 0,
               left: 0,
               width: "100%",
               height: "100%",
               borderRadius: 0,
               bgcolor: imageUrl ? "transparent" : "",
               color: imageUrl ? "white" : "",
            }}
         >
            {imageUrl ? <DeleteOutlined /> : <Add />}
         </IconButton>

         <input
            key={name + key.toString()}
            onChange={onChange}
            ref={inputRef}
            className="hidden"
            type="file"
            name={name}
            accept="image/png, image/jpg, image/jpeg"
         />
      </Box>
   );
}
