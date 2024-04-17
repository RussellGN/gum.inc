import { sampleUsers } from "@/app/lib/sampleData";
import { Box, Grid, Typography } from "@mui/material";
import {
   Verified,
   LocationOn,
   Message,
   AutoStories,
   Star,
   BusinessCenter,
   Workspaces,
   Event,
   Business,
} from "@mui/icons-material";
import AspectContainedNextImage from "../general/AspectContainedNextImage";
import { gradients } from "@/app/lib/constants";
import { friendlyDate } from "@/app/lib/utils";
import UncontrolledSlideshow from "../general/UncontrolledSlideshow";
import { EventInterface, OrganizationInterface, UserInterface } from "@/app/interfaces";
import images from "@/app/assets";

export default function GridItem1() {
   return (
      <div className="col-span-3 row-span-2 flex items-center p-1">
         <UncontrolledSlideshow slides={slides} />
      </div>
   );
}

const user: UserInterface = {
   type: "user",
   worksAt: "Independant",
   id: 24,
   slug: "sarah-davis-24",
   name: "Sarah Davis",
   email: "sarahdavis@gmail.com",
   jobTitle: "Fitness Instructor",
   industry: "Fitness",
   location: "Newcastle",
   verified: true,
   bio: "Certified fitness instructor passionate about helping others achieve their health and wellness goals.",
   displayPhoto: images.user3f,
   images: [images.restaurant2],
   serviceOfferings: [
      {
         service: "Personal Training",
         description: "One-on-one fitness sessions tailored to individual needs.",
      },
      {
         service: "Group Classes",
         description: "Fun and energizing fitness classes for all fitness levels.",
      },
   ],
   socialMedia: [
      {
         platform: "Instagram",
         username: "sarahfitness",
         url: "#",
      },
      {
         platform: "Facebook",
         username: "sarahfitness",
         url: "#",
      },
   ],
};

const event: EventInterface = {
   type: "event",
   verified: true,
   id: 2,
   slug: "art-exhibition-2",
   name: "Art Exhibition",
   creator: sampleUsers[5],
   contactDetails: "Text or call +101 32433494",
   eventType: "Exhibition",
   location: "London",
   about: "An exhibition showcasing the works of local artists exploring different mediums and styles.",
   startDate: "2024-07-15",
   endDate: "2024-07-20",
   keyTakeaways: [
      {
         takeaway: "Special guests",
         description: "We've invited relevant people to speak for the occasion",
      },
      {
         takeaway: "Drinks & Food",
         description: "Drinks and food will be made available",
      },
   ],
   displayPhoto: images.artShop2,
   images: [images.artShop2, images.artShop, images.person4m],
};

const organization: OrganizationInterface = {
   type: "organization",
   id: 90,
   slug: "auto-works-90",
   name: "Borcelle Auto Works",
   admin: sampleUsers[1],
   team: [sampleUsers[2], sampleUsers[0]],
   industry: "Automotive repairs",
   location: "Glasgow",
   verified: true,
   email: "info@autoglasgow.com",
   contactDetails: "call us on +121 43435 656",
   about: "Trusted auto repair shop specializing in comprehensive vehicle maintenance and repair services. With years of experience, our team of skilled technicians is dedicated to providing top-notch automotive solutions. From routine maintenance tasks to complex engine repairs, we're committed to keeping vehicles running smoothly and safely on the road.",
   displayPhoto: images.auto_shop_2,
   images: [images.auto_shop_2, images.auto_shop_3, images.auto_shop_2, images.vinatge_cars, images.auto_shop_5],
   serviceOfferings: [
      {
         service: "Diagnostic Services",
         description:
            "Utilizing state-of-the-art diagnostic equipment to identify and troubleshoot vehicle issues accurately and efficiently.",
      },
      {
         service: "Routine Maintenance",
         description:
            "Performing essential maintenance tasks such as oil changes, tire rotations, and brake inspections to ensure optimal vehicle performance and longevity.",
      },
      {
         service: "Repair Services",
         description:
            "Offering a full range of repair services, including engine repairs, transmission repairs, brake repairs, and electrical system diagnostics and repairs.",
      },
      {
         service: "Quality Parts",
         description:
            "Using high-quality OEM or aftermarket parts for repairs and replacements, backed by warranty options for added peace of mind.",
      },
   ],
   socialMedia: [
      {
         platform: "LinkedIn",
         username: "BorcelleAuto",
         url: "#",
      },
      {
         platform: "Facebook",
         username: "BorcelleAuto",
         url: "#",
      },
      {
         platform: "Instagram",
         username: "BorcelleAuto",
         url: "#",
      },
      {
         platform: "Twitter",
         username: "BorcelleAuto",
         url: "#",
      },
   ],
};

const slides = [
   <div key="item1-slide1" className="h-full">
      <Box className="border rounded-[15px] bg-white flex flex-col flex-1 justify-around h-full p-1.5">
         <Grid container spacing={1} justifyContent="space-between" className="mb-2 ">
            <Grid item xs zeroMinWidth>
               <Typography fontWeight="bold" noWrap sx={{ textDecoration: "underline" }}>
                  {user.name}
               </Typography>
               <Typography variant="caption" noWrap component="p">
                  {user.jobTitle}
               </Typography>
            </Grid>
            <Grid item xs="auto">
               <Verified fontSize="small" />
            </Grid>
         </Grid>

         <Box
            sx={{
               position: "relative",
               "&:after": {
                  content: "''",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(255,255,255,0.3)",
                  borderRadius: "10px",
               },
            }}
         >
            <AspectContainedNextImage
               src={user.displayPhoto}
               alt={user.name}
               sx={{
                  borderRadius: "10px",
               }}
            />
         </Box>

         <Box className="mt-2 flex justify-between items-center">
            <Typography noWrap className="flex-grow">
               <LocationOn fontSize="inherit" sx={{ mr: 0.2, mt: -0.2 }} />
               {user.location}
            </Typography>
            <Message />
         </Box>
      </Box>
   </div>,

   <div key="item1-slide2" className="items-center justify-center h-full">
      <Box
         className="h-full p-3 text-white border flex flex-col justify-around shadow-lg rounded-[10px]"
         sx={{ background: gradients.primary1 }}
      >
         <Typography variant="subtitle2" className="flex items-center gap-3">
            <AutoStories />
            <span>10+ Curated Directories</span>
         </Typography>
         <Typography variant="subtitle2" className="flex items-center gap-3">
            <Workspaces />
            <span>Encompassing Various Industries</span>
         </Typography>
         <Typography variant="subtitle2" className="flex items-center gap-3">
            <BusinessCenter />
            <span>Proffessionals, Services, Businessses, Events</span>
         </Typography>
         <Typography variant="subtitle2" className="flex items-center gap-3">
            <Star />
            <span> And More</span>
         </Typography>
      </Box>
   </div>,

   <div key="item1-slide3" className="h-full">
      <Box className="border rounded-[15px] bg-slate-100 flex flex-col flex-1 justify-around h-full p-1.5">
         <Grid container gap={1} justifyContent="space-between" className="mb-2 ">
            <Grid item xs zeroMinWidth>
               <Typography fontWeight="bold" noWrap sx={{ textDecoration: "underline" }}>
                  {event.name}
               </Typography>
               <Typography variant="caption" component="div">
                  {event.eventType}
               </Typography>
            </Grid>
            <Grid item xs="auto">
               <div className="flex flex-col gap-1">
                  <Verified fontSize="small" />
                  <Event fontSize="small" />
               </div>
            </Grid>
         </Grid>

         <Box
            sx={{
               position: "relative",
               "&:after": {
                  content: "''",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(255,255,255,0.3)",
                  borderRadius: "10px",
               },
            }}
         >
            <AspectContainedNextImage
               src={event.displayPhoto}
               alt={event.name}
               sx={{
                  borderRadius: "10px",
               }}
            />
         </Box>

         <Box className="mt-2 flex justify-between items-center">
            <Typography noWrap className="flex-grow">
               <LocationOn fontSize="inherit" sx={{ mr: 0.2, mt: -0.2 }} />
               {event.location}
            </Typography>
            <Typography variant="caption" color="grey">
               {`${friendlyDate(event.startDate)} `}
            </Typography>
         </Box>
      </Box>
   </div>,

   <div key="item1-slide4" className="h-full">
      <Box className="border rounded-[15px] bg-white flex flex-col flex-1 justify-around h-full p-1.5">
         <Grid container gap={1} justifyContent="space-between" className="mb-2 ">
            <Grid item xs zeroMinWidth>
               <Typography fontWeight="bold" noWrap sx={{ textDecoration: "underline" }}>
                  {organization.name}
               </Typography>
               <Typography variant="caption" component="div">
                  {organization.industry}
               </Typography>
            </Grid>
            <Grid item xs="auto">
               <div className="flex flex-col gap-1">
                  <Verified fontSize="small" />
                  <Business fontSize="small" />
               </div>
            </Grid>
         </Grid>

         <Box
            sx={{
               position: "relative",
               "&:after": {
                  content: "''",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(255,255,255,0.3)",
                  borderRadius: "10px",
               },
            }}
         >
            <AspectContainedNextImage
               src={organization.displayPhoto}
               alt={organization.name}
               sx={{
                  borderRadius: "10px",
               }}
            />
         </Box>

         <Box className="mt-2 flex justify-between items-center">
            <Typography noWrap className="flex-grow">
               <LocationOn fontSize="inherit" sx={{ mr: 0.2, mt: -0.2 }} />
               {organization.location}
            </Typography>
            <Message />
         </Box>
      </Box>
   </div>,
];
