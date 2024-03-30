"use client";

import { useState, SyntheticEvent } from "react";
import { Link as MuiLink, Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { directories } from "@/app/lib/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { InfoOutlined } from "@mui/icons-material";
import Link from "next/link";

export default function DirsAccordion() {
   const router = useRouter();
   const readOnlySearchParams = useSearchParams();
   const searchParams = new URLSearchParams(readOnlySearchParams);
   const activeDir = searchParams.get("dir") || directories[0].name;

   const [expanded, setExpanded] = useState<string | false>(`panel${activeDir}`);

   const handleChange = (dir: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      searchParams.set("dir", dir);
      router.push("/inc-connect?" + searchParams.toString());
      setExpanded(isExpanded ? `panel${dir}` : false);
   };

   return (
      <>
         {directories.map((dir) => (
            <Accordion
               elevation={0}
               key={dir.name}
               expanded={expanded === `panel${dir.name}`}
               onChange={handleChange(dir.name)}
               sx={{
                  border: "solid 2px",
                  borderColor: "divider",
                  borderRadius: "10px",
                  mb: 1,
                  "&:before": {
                     display: "none",
                  },
                  "& .MuiAccordionDetails-root": {
                     p: 1,
                  },
                  "& .MuiAccordionSummary-root": {
                     p: 1,
                     minHeight: "unset",
                     borderRadius: "10px 10px 0 0",
                  },
                  "& .MuiAccordionSummary-root:hover": {
                     bgcolor: "whitesmoke",
                  },
                  "& .MuiAccordionSummary-root.Mui-expanded": {
                     bgcolor: "divider",
                  },
                  "& .MuiAccordionSummary-content": {
                     m: "unset",
                  },
                  // "& .MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded": {
                  //    minHeight: 0,
                  // },
               }}
            >
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${dir.name}bh-content`}
                  id={`panel${dir.name}bh-header`}
                  sx={{
                     "& .MuiAccordionSummary-root.Mui-expanded": {
                        height: "fit-content",
                        minHeight: "fit-content !important",
                     },
                  }}
               >
                  <Typography>{dir.name}</Typography>
               </AccordionSummary>
               <AccordionDetails>
                  {/* <Typography component="p" variant="caption" className="bg-[whitesmoke] p-1.5 rounded-sm"> */}
                  {/* <Typography component="p" variant="caption" className="border-t-4 pt-2"> */}
                  <Typography component="p" variant="caption">
                     <Typography variant="caption" className="line-clamp-2">
                        {dir.shortDescription}
                     </Typography>{" "}
                     <MuiLink component={Link} href={`/about#directories-${dir.name}`}>
                        <InfoOutlined fontSize="small" sx={{ mt: -0.1 }} /> read more
                     </MuiLink>
                  </Typography>
               </AccordionDetails>
            </Accordion>
         ))}
      </>
   );
}
