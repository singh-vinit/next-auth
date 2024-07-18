import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "username",
          type: "string",
          placeholder: "@username",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "@password",
        },
      },
      //@ts-ignore
      async authorize(credentials) {
        const user = await client.user.findFirst({
          where: {
            username: credentials?.username,
            password: credentials?.password,
          },
        });
        if (!user) {
          return null;
        }
        return { id: user.id, name: user.name };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
