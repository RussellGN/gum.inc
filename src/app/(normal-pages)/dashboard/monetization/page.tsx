import Earnings from "@/app/components/dashboard/Earnings";
import { StatCard } from "@/app/components/dashboard/Statistics";
import { CurrencyExchange, InfoOutlined, VisibilitySharp } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function page() {
   return (
      <Grid container spacing={2} sx={{ p: 2 }}>
         <Grid item xs={12}>
            <Earnings alternate />
         </Grid>

         <Grid item xs={12}>
            <Typography sx={{ p: 4 }} variant="h3" fontWeight="bold" className="flex items-center gap-3 ">
               Monetization options
               <Button component={Link} href="/about#monetization" startIcon={<InfoOutlined />}>
                  About
               </Button>
            </Typography>
         </Grid>

         <Grid item xs={12} md={4}>
            <Box className="shadow-lg bg-white rounded-xl border p-5 h-full">
               <Typography sx={{ mb: 2 }} variant="h4" fontWeight="bold" className="flex items-center gap-3 ">
                  Profile Visibility
                  <CurrencyExchange fontSize="inherit" />
               </Typography>
               <Typography variant="subtitle2" sx={{ mb: 2, px: 1 }}>
                  Get rewarded for showcasing your expertise on Gum.iNc. Earnings are determined internally and derive from
                  profile views and actiivty. Maximize your visibility and let your profile work for you.
                  <br />
                  <strong>Earnings Since Last Withdrawl: £100</strong>
               </Typography>
               <StatCard
                  statistic={{ name: "Views", value: "22k", icon: <VisibilitySharp color="primary" fontSize="large" /> }}
               />
            </Box>
         </Grid>

         <Grid item xs={12} md={4}>
            <Box className="shadow-lg bg-white rounded-xl border p-5 h-full">
               <Typography sx={{ mb: 2 }} variant="h4" fontWeight="bold" className="flex items-center gap-3 ">
                  {/* Sales agent &amp; representative */}
                  Affiliate Program
                  <CurrencyExchange fontSize="inherit" />
               </Typography>
               <Typography variant="subtitle2" sx={{ mb: 2, px: 1 }}>
                  Join our dynamic team of affiliates.
                  {/* sales agents and representative. */}
                  Leverage your network, promote Gum.iNc memberships, and earn attractive commissions. Be a driving force in
                  expanding our community while enjoying the benefits of a flexible and rewarding role
                  {/* <br /> */}
                  {/* <strong>Earnings Since Last Withdrawl: £134</strong> */}
               </Typography>
               <div>
                  <Button fullWidth>Apply</Button>
               </div>
            </Box>
         </Grid>

         <Grid item xs={12} md={4}>
            <Box className="shadow-lg bg-white rounded-xl border p-5 h-full">
               <Typography sx={{ mb: 2 }} variant="h4" fontWeight="bold" className="flex items-center gap-3 ">
                  Referral Program
                  <CurrencyExchange fontSize="inherit" />
               </Typography>
               <Typography variant="subtitle2" sx={{ mb: 2, px: 1 }}>
                  Spread the word and reap the rewards with Gum.iNc&apos;s Referral Program. Introduce businesses and
                  individuals to our platform, and earn commissions for each successful referral. It&apos;s a win-win – your
                  connections benefit from our services, and you earn for every new member you bring on board.
                  {/* <br /> */}
                  {/* <strong>Earnings Since Last Withdrawl: £134</strong> */}
               </Typography>
               <div>
                  <Button fullWidth>Apply</Button>
               </div>
            </Box>
         </Grid>
      </Grid>
   );
}
