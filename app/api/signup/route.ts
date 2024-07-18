import { NextRequest, NextResponse as res } from "next/server";
import { PrismaClient } from "@prisma/client";

interface Response {
  name: string;
  username: string;
  password: string;
}

export async function POST(req: NextRequest) {
  const prisma = new PrismaClient();
  const body: Response = await req.json();
  const userExist = await prisma.user.findUnique({
    where: { username: body.username },
  });
  if (userExist) {
    return res.json({ message: "user already exist!" });
  } else {
    await prisma.user.create({
      data: {
        name: body.name,
        username: body.username,
        password: body.password,
      },
    });
    return res.json({ message: "user created successfully!" });
  }
}
