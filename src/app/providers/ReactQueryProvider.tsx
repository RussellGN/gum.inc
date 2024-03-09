"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";

const queryClient = new QueryClient();

export default function ReactQueryProvider({ children }: PropsWithChildren) {
   const [client] = useState(queryClient);

   return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
