import { PrismaClient } from "@/generated/prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const flashcards = await prisma.flashCard.findMany();
  return NextResponse.json(flashcards);
}
