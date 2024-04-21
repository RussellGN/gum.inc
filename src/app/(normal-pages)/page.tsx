import { Box, SxProps } from "@mui/material";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import ResearchTools from "../components/home/ResearchTools";
import SearchCta from "../components/home/SearchCta";
import ValueProposition from "../components/home/ValueProposition";

export default function Home() {
   const sx: SxProps = { mb: { xs: 10, md: "unset" } };

   return (
      <>
         <Box sx={sx}>
            <Hero />
         </Box>

         <Box sx={sx}>
            <SearchCta />
         </Box>

         <Box sx={sx}>
            <ValueProposition />
         </Box>

         <Box sx={sx}>
            <Features />
         </Box>

         <Box sx={sx}>
            <ResearchTools />
         </Box>
      </>
   );
}
