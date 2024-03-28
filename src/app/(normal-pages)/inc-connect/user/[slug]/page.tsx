import GoBackBtn from "@/app/components/general/GoBackBtn";
import UserAccountDetails from "@/app/components/general/UserAccountDetails";
import { sampleUsers } from "@/app/lib/sampleData";

export default function Page({ params: { slug } }: { params: { slug: string } }) {
   const user = sampleUsers.find((sampleUser) => sampleUser.slug === slug);

   if (!user) throw new Error("User not found");
   // const isAuthenticated = false;

   return (
      <>
         <GoBackBtn />

         <UserAccountDetails user={user} />
      </>
   );
}
