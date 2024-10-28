import { appRouter } from "@/server/routers";
import * as trpcNext from "@trpc/server/adapters/next";
import { createContext } from "@/server/trpc/context";

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});
