import { UserInterface, EventInterface, EstablishmentInterface } from "@/app/interfaces";
import EventCard from "./EventCard";
import UserCard from "./UserCard";
import EstablishmentCard from "./EstablishmentCard";

export default function Listing({ listing }: { listing: UserInterface | EventInterface | EstablishmentInterface }) {
   switch (listing.type) {
      case "user":
         return <UserCard user={listing as UserInterface} />;
      case "event":
         return <EventCard event={listing as EventInterface} />;
      case "establishment":
         return <EstablishmentCard establishment={listing as EstablishmentInterface} />;
      default:
         throw new Error("Cannot find listing type: " + listing.type);
   }
}
