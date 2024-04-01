"use client";

import { KeyboardArrowDown, InfoOutlined } from "@mui/icons-material";
import Image from "next/image";
import { Link as MuiLink, Box, Popover, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import { MouseEvent, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function AccessSelector() {
   const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
   const router = useRouter();
   const pathname = usePathname();
   const readOnlySearchParams = useSearchParams();
   const searchParams = new URLSearchParams(readOnlySearchParams);
   const accessLevel = (searchParams.get("access-level") as "global" | "uk") || "uk";

   function changeAccessLevel(newAccessLevel: string) {
      searchParams.set("access-level", newAccessLevel);
      router.replace(pathname + "?" + searchParams.toString());
   }

   const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const open = Boolean(anchorEl);
   const id = open ? "simple-popover" : undefined;

   return (
      <div>
         <button
            type="button"
            aria-describedby={id}
            onClick={handleClick}
            className="flex gap-1 items-center border rounded-[20px] px-1 py-0.5 hover:bg-[whitesmoke]"
         >
            <Image
               src={accessLevel === "uk" ? "/svgs/ukFlag.svg" : "/svgs/worldFlag.svg"}
               alt={accessLevel === "uk" ? "uk flag" : "world flag"}
               width={35}
               height={35}
               className={`w-7 h-7 object-cover border rounded-[100%]`}
            />
            <KeyboardArrowDown />
         </button>

         <Popover
            // elevation={3}
            sx={{ "& .MuiPopover-paper": { borderRadius: "15px", mt: 2 } }}
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
         >
            <Box sx={{ p: 3 }}>
               <FormControl>
                  <FormLabel id="access-level-label" className="flex gap-3 items-center" sx={{ mb: 1.5 }}>
                     Access Level
                     <MuiLink sx={{ mt: -0.3 }} component={Link} href="/about#access-level">
                        <InfoOutlined fontSize="small" />
                     </MuiLink>
                  </FormLabel>

                  <RadioGroup
                     aria-labelledby="access-level-label"
                     value={accessLevel}
                     onChange={(e) => changeAccessLevel(e.target.value)}
                     name="access-level"
                  >
                     <FormControlLabel value="uk" control={<Radio />} label={"United kingdom"} />
                     <FormControlLabel value="global" control={<Radio />} label="Global" />
                  </RadioGroup>
               </FormControl>
            </Box>
         </Popover>
      </div>
   );
}
