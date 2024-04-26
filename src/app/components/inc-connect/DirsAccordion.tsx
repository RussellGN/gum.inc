"use client";

import { useState, SyntheticEvent } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { directories, primaryDarkColor } from "@/app/lib/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import useIsMobile from "@/app/hooks/useIsMobile";

export default function DirsAccordion() {
   const router = useRouter();
   const readOnlySearchParams = useSearchParams();
   const searchParams = new URLSearchParams(readOnlySearchParams);
   const activeDir = searchParams.get("dir") || directories[0].name;
   const [expandAbout, setExpandAbout] = useState(false);
   const [expanded, setExpanded] = useState<string | false>(`panel${activeDir}`);
   const [showAll, setShowAll] = useState(false);
   const theme = useTheme();
   const isMobile = useIsMobile();

   const handleChange = (dir: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      searchParams.set("dir", dir);
      router.push("/inc-connect?" + searchParams.toString());
      setExpandAbout(false);
      setShowAll(false);
      if (isMobile && showAll) setExpanded(false);
      else setExpanded(isExpanded ? `panel${dir}` : false);
   };

   return (
      <>
         {directories.map((dir) => {
            return (
               <Box
                  sx={{
                     ...(isMobile && !showAll && activeDir !== dir.name ? { display: "none" } : {}),
                     border: "solid 2px",
                     borderColor: "divider",
                     borderRadius: "10px",
                     mb: 1,
                     overflow: "hidden",
                  }}
                  key={dir.name}
               >
                  <Accordion
                     elevation={0}
                     expanded={expanded === `panel${dir.name}`}
                     onChange={handleChange(dir.name)}
                     sx={{
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
                        <Typography component="p" variant="caption">
                           <Typography variant="caption" className={expandAbout ? "" : "line-clamp-2"}>
                              {dir.about}
                           </Typography>{" "}
                           <button
                              style={{ color: theme.palette.primary.dark }}
                              className="bg-[transparent] border-0 outline-0 mt-2 flex items-center gap-2"
                              onClick={() => setExpandAbout((prev) => !prev)}
                           >
                              {expandAbout ? (
                                 <>
                                    minimize <KeyboardArrowUp fontSize="small" />
                                 </>
                              ) : (
                                 <>
                                    expand <KeyboardArrowDown fontSize="small" />
                                 </>
                              )}
                           </button>
                        </Typography>
                     </AccordionDetails>
                  </Accordion>
               </Box>
            );
         })}

         {isMobile ? (
            <Box className="flex items-center justify-center" sx={{ mb: 1 }}>
               <button
                  onClick={() => setShowAll((prev) => !prev)}
                  className="bg-[transparent] border-0 flex items-center justify-center gap-2"
                  style={{ color: primaryDarkColor }}
               >
                  <span>Show {showAll ? "less" : "all"}</span>
                  {showAll ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
               </button>
            </Box>
         ) : (
            ""
         )}
      </>
   );
}
