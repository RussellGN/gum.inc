"use client";

import useIsMobile from "@/app/hooks/useIsMobile";
import { PropsWithChildren } from "react";

export default function IsMobileGrid({ children }: PropsWithChildren) {
   const isMobile = useIsMobile();

   return <div className={`grid ${isMobile ? "grid-cols-2 gap-1" : "grid-cols-5 gap-2"}`}>{children}</div>;
}
