import { PrismaClient } from "@/generated/prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
/**
 * GET /api/sets
 *
 * Fetches all flashcard sets from the database.
 *
 * @returns 200 OK with all sets (excluding flashcards by default),
 *          500 Internal Server Error if something goes wrong
 */
export async function GET() {
  const sets = await prisma.set.findMany();
  return NextResponse.json(sets);
}
