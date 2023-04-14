import { router, procedure } from "../trpc";
import { z } from "zod";

export const tweetRouter = router({
  postTweet: procedure
    .input(
      z.object({
        content: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {}),
});
