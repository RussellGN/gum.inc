import GoBackBtn from "@/app/components/general/GoBackBtn";
import UserAccountDetails from "@/app/components/general/UserAccountDetails";
import { sampleUsers } from "@/app/lib/sampleData";

export default function Page({ params: { slug } }: { params: { slug: string } }) {
   const user = sampleUsers.find((sampleUser) => sampleUser.slug === slug) || sampleUsers[1];

   if (!user) throw new Error("User not found");

   return (
      <>
         <GoBackBtn />

         <UserAccountDetails user={user} />
      </>
   );
}
