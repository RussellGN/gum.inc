import EventPage from "@/app/components/general/EventPage";
import GoBackBtn from "@/app/components/general/GoBackBtn";
import { sampleEvents } from "@/app/lib/sampleData";

export default function Page({ params: { slug } }: { params: { slug: string } }) {
   const event = sampleEvents.find((event) => event.slug === slug) || sampleEvents[0];

   if (!event) throw new Error("Event not found");

   return (
      <>
         <GoBackBtn />

         <EventPage event={event} />
      </>
   );
}
