import images from "@/app/assets";
import { KeyboardArrowDown } from "@mui/icons-material";
import Image, { StaticImageData } from "next/image";
import React from "react";

export default function AccessSelector() {
   return (
      <div className="flex gap-1 items-center border rounded-[20px] px-1 py-0.5 cursor-pointer hover:bg-[whitesmoke]">
         <Image
            src={images.ukFlag as StaticImageData}
            alt={"current access' flag"}
            width={35}
            height={35}
            className={`w-7 h-7 object-cover border rounded-[100%]`}
         />
         <KeyboardArrowDown />
      </div>
   );
}
