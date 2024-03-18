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
   displayPhoto: string | StaticImageData;
   serviceOfferings: {
      service: string;
      description: string;
   }[];
   images: (string | StaticImageData)[];
   socialMedia: {
      platform: string;
      username: string;
      url: string;
   }[];
}
