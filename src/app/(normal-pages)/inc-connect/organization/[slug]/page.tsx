import OrganizationPage from "@/app/components/general/OrganizationPage";
import GoBackBtn from "@/app/components/general/GoBackBtn";
import { sampleOrganizations } from "@/app/lib/sampleData";

export default function Page({ params: { slug } }: { params: { slug: string } }) {
   const organization = sampleOrganizations.find((organization) => organization.slug === slug);

   if (!organization) throw new Error("User not found");

   return (
      <>
         <GoBackBtn />

         <OrganizationPage organization={organization} />
      </>
   );
}
