import { AppRouter } from "@/server/routers";
import { createTRPCNext } from "@trpc/next";
import { httpBatchLink } from "@trpc/client";
import superjson from "superjson";

export const trpc = createTRPCNext<AppRouter>({
  config: (opts) => ({
    transformer: superjson,
    links: [
      httpBatchLink({
        url: "/api/trpc",
      }),
    ],
  }),
  ssr: false,
});
