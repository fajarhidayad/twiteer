import { router, procedure } from "../trpc";
import { z } from "zod";

export const tweetRouter = router({
  getAllTweets: procedure.query(async ({ ctx }) => {
    const tweets = await ctx.prisma.tweet.findMany();

    return tweets;
  }),
});
