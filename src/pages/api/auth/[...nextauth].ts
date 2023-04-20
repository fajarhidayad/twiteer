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
      // async signIn(p) {
      //   let success = false;
      //   let body = {}
      //   if(!p.credentials) {
      //     let provider = p.account?.provider
      //     let username = p.user?.name
      //     let email = p.user?.email
      //     body = {
      //       provider,
      //       username,
      //       email,
      //       name: username
      //     }
      //   } else {
      //     body = {
      //       provider: "credentials",
      //       username: p.credentials.username,
      //       password: p.credentials.password
      //     }
      //   }
      //   try {
      //   } catch (error) {
      //   }
      // }
    },
    providers: getProviders(),
  };
}

export default NextAuth(authOptions());
