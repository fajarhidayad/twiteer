import { z } from "zod";
import { router, procedure } from "../trpc";
import { tweetRouter } from "./tweet";
import { userRouter } from "./user";

export const appRouter = router({
  tweet: tweetRouter,
  user: userRouter,
});

export type AppRouter = typeof appRouter;
