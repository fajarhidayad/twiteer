import { TRPCError } from "@trpc/server";
import { router, procedure } from "../trpc";
import { z } from "zod";

export const userRouter = router({
  getProfile: procedure
    .input(
      z.object({
        email: z.string().email().optional(),
        username: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      if (input.email) {
        const userProfile = await ctx.prisma.user.findUnique({
          where: { email: input.email },
        });

        if (!userProfile) {
          throw new TRPCError({ code: "NOT_FOUND" });
        }

        return userProfile;
      } else {
        const userProfile = await ctx.prisma.user.findUnique({
          where: { username: input.username },
        });

        if (!userProfile) {
          throw new TRPCError({ code: "NOT_FOUND" });
        }

        return userProfile;
      }
    }),
  updateProfile: procedure
    .input(
      z.object({
        name: z.string(),
        username: z.string(),
        bio: z.string(),
        email: z.string().email(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const checkUsername = await ctx.prisma.user.findUnique({
        where: { username: input.username },
      });
      if (checkUsername && checkUsername.email !== input.email) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "Username already taken",
        });
      }

      const userProfile = ctx.prisma.user.update({
        where: { email: input.email },
        data: input,
      });

      return userProfile;
    }),
});
