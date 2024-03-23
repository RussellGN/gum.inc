import UserAccountDetails from "@/app/components/general/UserAccountDetails";
import { sampleUsers } from "@/app/lib/sampleData";

export default function Page() {
   const user = sampleUsers[1];

   if (!user) throw new Error("User not found");

   return <UserAccountDetails user={user} isAuthenticated />;
}
