import JoinValueFeature from "@/app/components/inc-connect/JoinValueFeature";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
   return (
      <>
         {children}
         <JoinValueFeature />
      </>
   );
}
