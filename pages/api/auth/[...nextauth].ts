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
    async signIn({ user, account }) {
      const callbackUrl = account?.callbackUrl;
      console.log("Callback URL:", callbackUrl); // Log the callback URL

      if (typeof callbackUrl === "string") {
        const url = new URL(callbackUrl);
        const role = url.searchParams.get("role");
        console.log("Role from callback URL:", role); // Log the extracted role

        if (typeof user.email === "string") {
          const existingUser = await prisma.user.findUnique({
            where: { email: user.email },
          });

          if (!existingUser) {
            // Create a new user with role
            const newUser = await prisma.user.create({
              data: {
                name: user.name || null,
                email: user.email,
                image: user.image || null,
                emailVerified: null,
                role: (role as Role) || Role.USER, // Default to USER if no role is provided
              },
            });
            console.log("New user created:", newUser);
          } else {
            // Update user role if needed
            if (role && (role === Role.USER || role === Role.RECRUITER)) {
              console.log("Updating user role...");
              const updatedUser = await prisma.user.update({
                where: { email: user.email },
                data: { role: role as Role },
              });
              console.log("User updated:", updatedUser);
            }
          }
        } else {
          console.error("User email is not a valid string:", user.email);
        }
      } else {
        console.error("Invalid callbackUrl:", callbackUrl);
      }

      return true;
    },

    async session({ session }) {
      if (session?.user?.email) {
        const dbUser = await prisma.user.findUnique({
          where: { email: session.user.email },
        });
        console.log("DB User found:", dbUser); // Log the found user
        session.user.role = dbUser?.role as Role;
      }
      return session;
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
