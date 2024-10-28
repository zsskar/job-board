import { router } from "../trpc/trpc";
import { userRouter } from "./user";

export const appRouter = router({
  user: userRouter,
});

export type AppRouter = typeof appRouter;
