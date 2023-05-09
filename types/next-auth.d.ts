import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      username?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
      name?: string | null | undefined;
    };
  }
}
