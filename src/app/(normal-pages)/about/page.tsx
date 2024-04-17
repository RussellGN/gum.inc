import Feature from "@/app/components/about/Feature";
import EmblaCarousel from "@/app/components/general/embla-slideshow/EmblaCarousel";
import { directories } from "@/app/lib/constants";
import { Box, Typography } from "@mui/material";

export default function Page() {
   const slides = directories.map((dir) => (
      <Box
         component="li"
         key={dir.name}
         // className="flex flex-col items-center justify-between gap-3 border rounded-lg p-3"
         className="flex flex-col items-center justify-between gap-3 p-3"
         sx={{
            // bgcolor: index % 2 === 1 ? "white" : "secondary.light",
            "& svg": { color: "primary.main", fontSize: "3rem" },
         }}
      >
         {dir.icon}
         <Typography fontWeight="bold" className="w-[15rem] text-center ">
            {dir.name}
         </Typography>
      </Box>
   ));

   return (
      <div>
         <div>
            {/* <Box sx={{ mb: 3 }} className="p-6 text-center border-b-8 border-t-8 w-fit mx-auto"> */}
            <Box sx={{ mb: 3 }} className="p-6 text-center  w-fit mx-auto">
               <Typography variant="h1">About Gum.inc</Typography>
            </Box>
         </div>

         <Feature
            minHeight="50vh"
            direction="left"
            image="/svgs/undraw_online_resume.svg"
            alt="online resume"
            body="Gum.iNc is a contract management IRM & CRM system oriented as an Almanac & Directory listing
            platform, at both online and offline spectrums. That focuses on how entrepreneurs, corporate
            entities and the creative economy-stores and secures business contacts , network and connections
            whilst profiting and generating revenue from having their contact in the Gum.iNc platform."
         />

         <Feature
            direction="right"
            image="/svgs/undraw_newspaper_re_syf5.svg"
            alt="newspaper"
            body="Revolutionizing and reinvention of the yellow pages , not only on all spectrums of information, digital or traditional yellow page hard copy culture but stretching into Motorizing contact platform, allow clients to generate funds for sustainability of existing information in our platform ."
         />

         <div className="mb-20 flex items-center justify-center min-h-80vh">
            <div className="w-full">
               <Box sx={{ mb: 3 }}>
                  <EmblaCarousel slides={slides} />
               </Box>

               <Typography variant="h2" className="text-center" sx={{ mb: 3 }}>
                  Directory System
               </Typography>

               <div className="mx-auto text-center max-w-prose">
                  <Typography>
                     Over the course of the centuries certain industries have deemed lucrative and thriving ,so we&apos;ve
                     carefully curated and tailor suited our directory system to 15 almanacs that have shown exponential
                     growth and positive future outlook in this ever changing digital era . Gum.iNc is a premium access
                     contact management system that is organized to thriving industry backed up by a multi faceted Almanac
                     and directory platform for connecting,networking and advertising. Explore and connect iNc with us
                     <br />
                     <br />
                     &lsquo;Inc Connec&lsquo;, Which is a listing platform that allows to entrepreneurs , corporates
                     ,businesses and individuals to advertise or list their product, service , craft ,skill or expertise. It
                     is backed up by a light messaging index that engages clients by messaging and favoriting the contacts
                     that&apos;d want to access and interact with . 3rd incription security codes which secures information
                     and scrutinizes all subscribers , bank cards , contacts , storage drives and email information.
                  </Typography>
               </div>
            </div>
         </div>

         {/* <div className="">
            <JoinValueFeature />
         </div> */}

         <Feature
            direction="left"
            image="/svgs/undraw_my_feed_inj0.svg"
            alt="newspaper"
            title="Inc Office"
            body="Stay informed and ahead of the curve with our Inc Office Newsletters. This exclusive publication delivers curated insights straight to your inbox, covering key areas such as strategy, marketing
            trends, and digital growth. Crafted for entrepreneurs and professionals seeking a competitive edge, our
            newsletter is a valuable resource to stay updated on industry trends, receive expert advice, and
            enhance your business acumen. Subscribe today to join a community of forward-thinkers dedicated to
            continuous learning and success in the dynamic world of entrepreneurship."
         />

         {/* <div className="mb-20">
            <Typography sx={{ mb: 2 }} variant="h2" textAlign="center">
               Monetization options
            </Typography>

            <Grid container spacing={2}>
               <Grid item xs={12} md={4}>
                  <Box className="shadow-lg bg-white rounded-xl border p-5 h-full">
                     <Typography sx={{ mb: 2 }} variant="h4" fontWeight="bold" className="flex items-center gap-3 ">
                        Profile Visibility
                        <CurrencyExchange fontSize="inherit" />
                     </Typography>
                     <Typography variant="subtitle2" sx={{ mb: 2, px: 1 }}>
                        Get rewarded for showcasing your expertise on Gum.iNc. Earnings are determined internally and derive
                        from profile views and actiivty. Maximize your visibility and let your profile work for you.
                        <br />
                        <strong>Earnings Since Last Withdrawl: £100</strong>
                     </Typography>
                     <StatCard
                        statistic={{
                           name: "Views",
                           value: "22k",
                           icon: <VisibilitySharp color="primary" fontSize="large" />,
                        }}
                     />
                  </Box>
               </Grid>

               <Grid item xs={12} md={4}>
                  <Box className="shadow-lg bg-white rounded-xl border p-5 h-full">
                     <Typography sx={{ mb: 2 }} variant="h4" fontWeight="bold" className="flex items-center gap-3 ">
                        Affiliate Program
                        <CurrencyExchange fontSize="inherit" />
                     </Typography>
                     <Typography variant="subtitle2" sx={{ mb: 2, px: 1 }}>
                        Join our dynamic team of affiliates.
                        Leverage your network, promote Gum.iNc memberships, and earn attractive commissions. Be a driving
                        force in expanding our community while enjoying the benefits of a flexible and rewarding role
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
                        individuals to our platform, and earn commissions for each successful referral. It&apos;s a win-win
                        – your connections benefit from our services, and you earn for every new member you bring on board.
                     </Typography>
                     <div>
                        <Button fullWidth>Apply</Button>
                     </div>
                  </Box>
               </Grid>
            </Grid>
         </div> */}
      </div>
   );
}
