import { PrismaClient } from "@/generated/prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const sets = await prisma.set.findMany();
  return NextResponse.json(sets);
}
