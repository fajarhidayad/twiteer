import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/utils/prisma";

const getProviders = () => {
  return [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID!,
    //   clientSecret: process.env.GITHUB_SECRET!
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ];
};

export function authOptions(): NextAuthOptions {
  return {
    adapter: PrismaAdapter(prisma),
    callbacks: {
      session: async ({ session, user }) => {
        const userData = await prisma.user.findUnique({
          where: { email: user.email },
        });

        session.user.username = userData?.username;

        return session;
      },
    },
    providers: getProviders(),
    secret: process.env.NEXTAUTH_SECRET,
  };
}

export default NextAuth(authOptions());
