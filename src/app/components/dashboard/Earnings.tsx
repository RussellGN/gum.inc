import { gradients } from "@/app/lib/constants";
import { AddCard, ArrowRightAlt, CurrencyExchange } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Earnings({ alternate }: { alternate?: boolean }) {
   return (
      <Box
         className="shadow-lg flex gap-2 items-center rounded-xl border  h-full"
         sx={{ background: gradients.secondary2, color: "white", py: 3, px: alternate ? 5 : 3 }}
      >
         <div className="flex-grow">
            <Typography sx={{ mb: 2 }} variant="h3" fontWeight="bold" className="flex items-center gap-3 ">
               Earnings
               <CurrencyExchange fontSize="inherit" />
            </Typography>

            <Typography fontWeight="bold">
               Total earned <span className="underline underline-offset-2">£620</span>
            </Typography>

            <Typography fontWeight="bold" sx={{ mb: 1 }}>
               Avilable for withdraw <span className="underline underline-offset-2">£100</span>
            </Typography>

            {!alternate && (
               <div>
                  <Button component={Link} href="/dashboard/monetization" fullWidth endIcon={<ArrowRightAlt />}>
                     Monetization Page
                  </Button>
               </div>
            )}
         </div>

         <Box sx={{ display: alternate ? "block" : "none" }}>
            <Button size="large" endIcon={<AddCard />}>
               Withdraw
            </Button>
         </Box>
      </Box>
   );
}
