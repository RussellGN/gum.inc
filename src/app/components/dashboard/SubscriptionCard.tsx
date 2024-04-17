import { SubscriptionInterface } from "@/app/interfaces";
import { friendlyDate } from "@/app/lib/utils";
import { Box, Button, Typography } from "@mui/material";

export default function SubscriptionCard({ subscription }: { subscription: SubscriptionInterface }) {
   const date = new Date(subscription.date);
   const expiryDate = new Date(date.setMonth(date.getMonth() + 1)).toLocaleDateString();

   return (
      <Box className="w-1/2 bg-white border-2 rounded-xl p-6 flex gap-4 items-start">
         {subscription.icon}
         <div className="flex-grow">
            <Typography fontWeight="bold">{subscription.name}</Typography>
            <Typography sx={{ mb: 1 }} component="p" variant="subtitle2">
               {subscription.description}
            </Typography>

            <Typography fontWeight="bold" sx={{ mb: 1 }} component="p" variant="subtitle2">
               {"Expires on " + friendlyDate(expiryDate)}
            </Typography>

            <div className="flex gap-2 items-center">
               <Button color="error">unsubscribe</Button>
            </div>
         </div>
      </Box>
   );
}
