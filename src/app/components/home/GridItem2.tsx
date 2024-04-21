import { Bookmarks, CheckCircleOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Image from "next/image";
import UncontrolledSlideshow from "../general/UncontrolledSlideshow";
import images from "@/app/assets";

const users = [
   {
      type: "user",
      worksAt: "Independant",
      id: 6,
      slug: "tom-lloyd-6",
      name: "Tom Lloyd",
      email: "lloydtm@gmail.com",
      jobTitle: "Organic farm specialist",
      industry: "Farming",
      location: "Manchester",
      verified: true,
      bio: "Dedicated farmer with a passion for sustainable agriculture and land stewardship. Specializes in cultivating organic crops and raising livestock using environmentally friendly practices. Experienced in crop rotation, soil health management, and integrated pest management to ensure high yields and quality produce. Committed to promoting local food systems and community engagement in agriculture.",
      displayPhoto: images.user2m,
      images: [images.farm_logo, images.farm, images.farm1, images.garden],
      serviceOfferings: [
         {
            service: "Organic Farming",
            description:
               "Cultivating a variety of organic crops using methods that prioritize soil health, biodiversity, and environmental sustainability.",
         },
         {
            service: "Livestock Management",
            description:
               "Raising healthy and happy animals through ethical and humane practices, focusing on animal welfare and quality of products.",
         },
         {
            service: "Farm-to-Table Sales",
            description:
               "Selling fresh produce and farm products directly to consumers through farmer's markets, community-supported agriculture (CSA), and online platforms.",
         },
         {
            service: "Agricultural Consulting",
            description:
               " Providing expert advice and guidance on sustainable farming practices, crop selection, and farm management techniques to aspiring farmers and agricultural businesses.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "farmerLloyd",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "farmerLloyd",
            url: "#",
         },
      ],
   },
   {
      type: "user",
      worksAt: "Independant",
      id: 7,
      slug: "steven-tyler-7",
      name: "Steven Tyler",
      email: "tyler@yahoo.co.uk",
      jobTitle: "Dj",
      industry: "Music",
      location: "London",
      verified: true,
      bio: "Dynamic bass DJ renowned for electrifying performances and infectious beats that keep crowds dancing all night. Specializes in mixing and blending bass-heavy tracks across various genres, from dubstep to trap to drum and bass. Known for creating immersive sonic experiences and fostering a vibrant atmosphere at clubs, festivals, and events worldwide.",
      displayPhoto: images.person9m,
      images: [images.event2, images.event3, images.event7],
      serviceOfferings: [
         {
            service: "Live Performances",
            description:
               "Delivering high-energy DJ sets featuring bass-heavy music, customized to suit the vibe and audience preferences of each event.",
         },
         {
            service: "Event Booking",
            description:
               "Available for bookings at clubs, festivals, concerts, private parties, and corporate events, bringing unparalleled energy and excitement to any occasion.",
         },
         {
            service: "Music Production",
            description:
               "Producing original bass music tracks and remixes for release on digital platforms, showcasing unique soundscapes and innovative production techniques.",
         },
         {
            service: "DJ Workshops",
            description:
               "Offering workshops and tutorials on bass DJing techniques, mixing fundamentals, and music production tips to aspiring DJs and electronic music enthusiasts.",
         },
      ],
      socialMedia: [
         {
            platform: "LinkedIn",
            username: "djTyler",
            url: "#",
         },
         {
            platform: "Facebook",
            username: "djTyler",
            url: "#",
         },
         {
            platform: "Instagram",
            username: "djTyler",
            url: "#",
         },
         {
            platform: "Twitter",
            username: "djTyler",
            url: "#",
         },
      ],
   },
];

export default function GridItem2() {
   const slides = [
      <div key="item2-slide1" className="h-full w-full flex justify-around gap-3 p-2">
         {users.map((user) => (
            <div key={user.id} className="flex flex-col items-center justify-around gap-0.5">
               <Image
                  src={user.displayPhoto}
                  alt={user.name}
                  className="w-10 h-10 bg-slate-50 object-cover rounded-[100%] border border-gray-500 shadow-lg"
               />
               <Typography className="mb-0" noWrap variant="subtitle2">
                  {user.name}
               </Typography>

               <Typography variant="caption" className="flex gap-2 items-center justify-center">
                  Saved
                  <CheckCircleOutlined fontSize="small" />
               </Typography>
            </div>
         ))}
      </div>,

      <div key="item2-slide2" className="h-full w-full flex justify-around gap-3">
         <div className="bg-white h-full px-2 flex flex-col items-center justify-center gap-2 text-center border rounded-[10px] ">
            <Bookmarks />
            <Typography fontWeight="bold">Bookmark Listings For Later Preview</Typography>
         </div>
      </div>,
   ];

   return (
      <div className="col-span-3 row-span-1 flex items-center p-1">
         <UncontrolledSlideshow interval={7000} slides={slides} />
      </div>
   );
}
