import { z } from "zod";
import { router, procedure } from "../trpc";
import { tweetRouter } from "./tweet";

export const appRouter = router({
  tweet: tweetRouter,
});

export type AppRouter = typeof appRouter;
