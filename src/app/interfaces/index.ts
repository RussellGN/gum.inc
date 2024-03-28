import { StaticImageData } from "next/image";
import { notificationType } from "../types";

interface ListingInterface {
   id: number;
   slug: string;
   name: string;
   type: "event" | "user" | "establishment";
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
   industry: string;
   location: string;
   verified: boolean;
   bio: string;
   serviceOfferings: {
      service: string;
      description: string;
   }[];
}

export interface EstablishmentInterface extends ListingInterface {
   email: string;
   admin: UserInterface;
   team?: UserInterface[];
   contactDetails?: string;
   industry: string;
   location: string;
   verified: boolean;
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
