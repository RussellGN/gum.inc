import { ArrowRightAlt, Message, Money, PeopleOutlined, Search } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

type feature = {
   title: string;
   description: string;
   icon: JSX.Element;
};

const features: feature[] = [
   {
      title: "let people find you",
      description: "Showcasing yourself on the platform enables people todiscover you mre easily",
      icon: <Search />,
   },

   {
      title: "engage businesses & people",
      description: "Once a member, you have the ability to engage other accounts via direct message",
      icon: <Message />,
   },

   {
      title: "showcase businesses & events",
      description: "Create pages for your events, businesses and more, so they may be discovered",
      icon: <PeopleOutlined />,
   },

   {
      title: "monetization opportunities",
      description: "We provide you with the means to earn by being part of the network and promoting it",
      icon: <Money />,
   },
];

export default function JoinValueFeature() {
   return (
      <Box sx={{ my: 8, py: 3 }}>
         <Typography variant="h3" sx={{ textAlign: "center", mb: 3 }}>
            Why Join The Network?
         </Typography>

         <div className="flex gap-3 overflow-x-auto items-stretch">
            {features.map((feature) => (
               <div key={feature.title} className="bg-white p-6 rounded-[15px]">
                  <Box className="flex flex-col text-center justify-center items-center gap-6">
                     <Box sx={{ "& svg": { fontSize: "2.5rem", color: "primary.light" } }}>{feature.icon}</Box>

                     <div className="w-[20rem]">
                        <Typography sx={{ mb: 1 }} variant="h4">
                           {feature.title.toUpperCase()}
                        </Typography>
                        <Typography>{feature.description}</Typography>
                     </div>
                  </Box>
               </div>
            ))}
         </div>

         <div className="flex items-center justify-center gap-3 mt-6">
            <Button size="medium" endIcon={<ArrowRightAlt />}>
               Join Now
            </Button>
         </div>
      </Box>
   );
}
