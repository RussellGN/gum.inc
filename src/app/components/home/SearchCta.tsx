"use client";

import useIsMobile from "@/app/hooks/useIsMobile";
import { Search } from "@mui/icons-material";
import { Box, Button, Typography, styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";

export default function SearchCta() {
   const [submiting, setSubmiting] = useState(false);
   const isMobile = useIsMobile();
   const router = useRouter();
   const inputRef = useRef<HTMLInputElement>(null);

   function onSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      setSubmiting(true);
      inputRef.current?.blur();
      const formData = new FormData(e.currentTarget);
      router.push("/inc-connect?query=" + (formData.get("query") ? formData.get("query") : "")?.toString());
   }
   return (
      <div className="min-h-[70vh] w-full flex items-center">
         <Box className="py-20 w-full flex flex-col items-center justify-center gap-3 relative">
            <Box
               className="w-full absolute -z-10 top-1/2 left-1/2 md:top-1/2 md:-right-20"
               sx={{ display: { xs: "none", md: "block" }, transform: { md: "translate(-50%,-50%) rotateY(180deg)" } }}
            >
               <Image src="/svgs/blob1.svg" width={160} height={90} alt="" className="w-full" />
            </Box>

            <Box
               className={isMobile ? "" : "shadow-xl"}
               sx={{
                  position: "absolute",
                  top: "-1rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: { md: "white" },
                  border: { md: "solid 2px" },
                  borderColor: "divider",
                  borderRadius: "20px",
                  px: { xs: 0, md: 4 },
                  py: { xs: 1.5, md: 1 },
                  width: { xs: "100%", md: "unset" },
                  textAlign: "center",
               }}
            >
               <Typography variant={isMobile ? "h3" : "h2"}>
                  Already know what you&apos;re <br className={isMobile ? "" : "hidden"} /> looking for?
               </Typography>
            </Box>

            {isMobile ? (
               ""
            ) : (
               <Typography className="max-w-prose text-center">
                  Type in search keywords to quickly <br />
                  find what you&apos;re looking for, or navigate to <Link href="/inc-connect">Inc Connect</Link> <br /> and
                  get exploring
               </Typography>
            )}
            <form onSubmit={onSubmit} className={`md:w-1/2 ${isMobile ? "mb-3" : "mt-5"} flex`}>
               <StyledInput
                  ref={inputRef}
                  className="flex-grow"
                  color="secondary"
                  name="query"
                  type="search"
                  placeholder="Search people, businesses and more..."
                  sx={{
                     borderRadius: "50px 0 0 50px ",
                     border: "solid thin",
                     borderColor: "primary.main",
                     boxShadow: "none",
                     textAlign: "center",
                     padding: { xs: "0.7rem 1rem", md: "1rem 2rem" },
                  }}
               />
               <Button
                  disabled={submiting}
                  color="primary"
                  type="submit"
                  sx={{
                     border: "solid thin",
                     borderColor: "primary.main",
                     borderRadius: "0 50px 50px 0",
                  }}
               >
                  <Search />
               </Button>
            </form>

            {isMobile ? (
               <Typography className="max-w-prose text-center" sx={{ px: { xs: 1, md: "unset" } }}>
                  Type in search keywords to quickly <br className={isMobile ? "hidden" : ""} />
                  find what you&apos;re looking for, or navigate to <Link href="/inc-connect">Inc Connect</Link> <br /> and
                  get exploring
               </Typography>
            ) : (
               ""
            )}
         </Box>
      </div>
   );
}

const StyledInput = styled("input")({});
