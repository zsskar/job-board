import NextAuth, { getServerSession, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { GetServerSidePropsContext } from "next";

enum Role {
  USER = "USER",
  RECRUITER = "RECRUITER",
  ADMIN = "ADMIN",
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: Role;
    };
  }

  interface User {
    role: Role;
  }
}

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn({ user, account, profile }) {
      // Check if user exists in the database
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email || "" },
      });

      if (!existingUser) {
        // If user doesn't exist, redirect to signup page
        return "/login?newUser=true";
      }

      // If the user exists, allow sign-in
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Redirect to dashboard if user exists
      return baseUrl + "/dashboard";
    },
  },
  pages: {
    signIn: "../../../signup", // Custom sign-in page (optional)
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the
 * `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 **/
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};

export default NextAuth(authOptions);
