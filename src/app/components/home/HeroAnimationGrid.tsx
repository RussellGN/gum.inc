import { Box } from "@mui/material";
import GridItem1 from "./GridItem1";
import GridItem2 from "./GridItem2";
import GridItem3 from "./GridItem3";
import GridItem4 from "./GridItem4";
import GridItem5 from "./GridItem5";

export default function HeroAnimationGrid() {
   return (
      <Box
         sx={{
            display: "grid",
            gap: 0.5,
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
            gridTemplateRows: "7rem 7rem 7rem",
         }}
      >
         <GridItem1 />
         <GridItem2 />
         <GridItem3 />
         <GridItem4 />
         <GridItem5 />
      </Box>
   );
}
