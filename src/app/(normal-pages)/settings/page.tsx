"use client";

import useIsMobile from "@/app/hooks/useIsMobile";
import { settings } from "@/app/lib/constants";
import { redirect } from "next/navigation";

export default function Page() {
   const isMobile = useIsMobile();
   // console.log();
   if (!isMobile) redirect("/settings/" + settings[0].name);
}
