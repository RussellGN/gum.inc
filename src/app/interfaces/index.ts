import { StaticImageData } from "next/image";
import { notificationType } from "../types";

export interface UserInterface {
   id: number;
   slug: string;
   name: string;
   email: string;
   jobTitle: string;
   industry: string;
   location: string;
   verified: boolean;
   bio: string;
   serviceOfferings: {
      service: string;
      description: string;
   }[];
   socialMedia: {
      platform: string;
      username: string;
      url: string;
   }[];
   displayPhoto: string | StaticImageData;
   images: (string | StaticImageData)[];
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
