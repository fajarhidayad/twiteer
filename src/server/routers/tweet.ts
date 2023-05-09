import { TRPCError } from "@trpc/server";
import { router, procedure } from "../trpc";
import { z } from "zod";

const tweetSchema = z.object({
  content: z.string(),
});

export const tweetRouter = router({
  getAllTweets: procedure.query(async ({ ctx }) => {
    const tweets = await ctx.prisma.tweet.findMany({
      include: { author: true },
      orderBy: { createdAt: "desc" },
    });

    return tweets;
  }),
  postTweet: procedure.input(tweetSchema).mutation(async ({ ctx, input }) => {
    if (ctx.session === null) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You must be logged in",
      });
    }
    const user = await ctx.prisma.user.findUnique({
      where: { email: ctx.session.user!.email! },
    });

    const tweet = await ctx.prisma.tweet.create({
      data: {
        content: input.content,
        authorId: user!.id,
      },
    });

    return tweet;
  }),
  getTweetByUsername: procedure
    .input(z.object({ username: z.string() }))
    .query(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.findUnique({
        where: { username: input.username },
      });

      if (!user)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found",
        });

      const tweets = await ctx.prisma.tweet.findMany({
        where: { authorId: user.id },
        include: { author: true },
      });

      return tweets;
    }),
});
