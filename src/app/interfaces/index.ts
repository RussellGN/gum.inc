import { StaticImageData } from "next/image";
import { notificationType } from "../types";

export interface ListingInterface {
   id: number;
   slug: string;
   name: string;
   type: "event" | "user" | "organization";
   verified: boolean;
   displayPhoto: string | StaticImageData;
   images: (string | StaticImageData)[];
   socialMedia?: {
      platform: string;
      username: string;
      url: string;
   }[];
}

export interface UserInterface extends ListingInterface {
   email: string;
   contactDetails?: string;
   jobTitle: string;
   worksAt?: string;
   industry: string;
   location: string;
   bio: string;
   serviceOfferings: {
      service: string;
      description: string;
   }[];
}

export interface OrganizationInterface extends ListingInterface {
   email: string;
   admin: UserInterface;
   team?: UserInterface[];
   contactDetails?: string;
   industry: string;
   location: string;
   about: string;
   serviceOfferings: {
      service: string;
      description: string;
   }[];
}

export interface EventInterface extends ListingInterface {
   creator: UserInterface;
   hosts?: UserInterface[];
   contactDetails: string;
   eventType: string;
   location: string;
   about: string;
   startDate: string;
   endDate: string;
   keyTakeaways: {
      takeaway: string;
      description: string;
   }[];
}

export interface NotificationInterface {
   id: number;
   title: string;
   user: UserInterface;
   type: notificationType;
   content: string;
   date: string;
   read: boolean;
}

export interface SubscriptionInterface {
   id: number;
   user: UserInterface;
   name: string;
   price: string;
   renews: boolean;
   date: string;
   expires?: string;
   description: string;
   icon: JSX.Element;
}

export interface DirectoryInterface {
   name: string;
   about: string;
   icon: JSX.Element;
   for: "events" | "users" | "organizations" | "users-organizations";
   itemToBeListed: string;
   actionForListing: () => void;
   // actionForListing: string | (() => void);
   // actionForListingWhenLoggedIn: "proceed-with-action" | "notify-consideration";
}

export interface ChatInterface {
   id: number;
   chatInitiator: UserInterface | OrganizationInterface | EventInterface;
   chatRespondend: UserInterface | OrganizationInterface | EventInterface;
}

export interface MessageInterface {
   id: number;
   chat: ChatInterface;
   sender: UserInterface | OrganizationInterface | EventInterface;
   date: string;
   body: string;
   opened: boolean;
}
