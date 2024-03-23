import { StaticImageData } from "next/image";

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
