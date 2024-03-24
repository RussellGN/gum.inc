import { SubscriptionInterface } from "@/app/interfaces";
import { Box, Button, Typography } from "@mui/material";

export default function SubscriptionCard({ subscription }: { subscription: SubscriptionInterface }) {
   const date = new Date(subscription.date);
   const expiryDate = new Date(date.setMonth(date.getMonth() + 1)).toLocaleDateString();

   return (
      <Box className="w-1/2 bg-[whitesmoke] border-2 rounded-lg p-3 flex gap-2 items-start">
         {subscription.icon}
         <div className="flex-grow">
            <Typography fontWeight="bold">{subscription.name}</Typography>
            <Typography sx={{ mb: 1 }} component="p" variant="subtitle2">
               {subscription.description}
            </Typography>

            <Typography fontWeight="bold" sx={{ mb: 2 }} component="p" variant="subtitle2">
               {subscription.renews ? "Renews on " + expiryDate : "Expires on " + expiryDate}
            </Typography>

            <div className="flex gap-2 items-center">
               <Button color="primary" variant={subscription.renews ? "outlined" : "contained"}>
                  {subscription.renews ? "Disable Auto Renew" : "Auto Renew"}
               </Button>
               <Button color="primary" variant="outlined">
                  Terminate
               </Button>
            </div>
         </div>
      </Box>
   );
}
