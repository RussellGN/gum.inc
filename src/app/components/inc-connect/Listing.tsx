import { UserInterface, EventInterface, OrganizationInterface } from "@/app/interfaces";
import EventCard from "./EventCard";
import UserCard from "./UserCard";
import OrganizationCard from "./OrganizationCard";

export default function Listing({ listing }: { listing: UserInterface | EventInterface | OrganizationInterface }) {
   switch (listing.type) {
      case "user":
         return <UserCard user={listing as UserInterface} />;
      case "event":
         return <EventCard event={listing as EventInterface} />;
      case "organization":
         return <OrganizationCard organization={listing as OrganizationInterface} />;
      default:
         throw new Error("Cannot find listing type: " + String(listing.type));
   }
}
