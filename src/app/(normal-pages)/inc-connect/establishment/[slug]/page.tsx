import EstablishmentPage from "@/app/components/general/EstablishmentPage";
import GoBackBtn from "@/app/components/general/GoBackBtn";
import { sampleEstablishments } from "@/app/lib/sampleData";

export default function Page({ params: { slug } }: { params: { slug: string } }) {
   const establishment = sampleEstablishments.find((establishment) => establishment.slug === slug);

   if (!establishment) throw new Error("User not found");

   return (
      <>
         <GoBackBtn />

         <EstablishmentPage establishment={establishment} />
      </>
   );
}
