import EventPage from "@/app/components/general/EventPage";
import GoBackBtn from "@/app/components/general/GoBackBtn";
import { sampleEvents } from "@/app/lib/sampleData";

export default function Page({ params: { slug } }: { params: { slug: string } }) {
   const event = sampleEvents.find((event) => event.slug === slug);

   if (!event) throw new Error("User not found");

   return (
      <>
         <GoBackBtn />

         <EventPage event={event} />
      </>
   );
}
