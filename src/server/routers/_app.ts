import { z } from "zod";
import { router, procedure } from "../trpc";

export const appRouter = router({});

export type AppRouter = typeof appRouter;
