import { PrismaClient } from "@/generated/prisma"; // Use "@prisma/client" if you're not using a custom generator
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

/**
 * POST /api/sets
 *
 * Creates a new flashcard set and its associated flashcards.
 *
 * Expects a JSON body with:
 * {
 *   name: string,
 *   flashcards: Array<{
 *     term: string,
 *     definition: string,
 *     src?: string
 *   }>
 * }
 *
 * @param req - Incoming request object with JSON body
 *
 * @returns 201 with the created set and flashcards,
 *          400 for invalid input,
 *          500 for any server-side error
 */
export async function POST(req: Request) {
  try {
    // Parse and validate request body
    const body = await req.json();
    const { name, flashcards } = body;

    if (!name || !Array.isArray(flashcards)) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    // Create new set with associated flashcards
    const newSet = await prisma.set.create({
      data: {
        name,
        flashcards: {
          create: flashcards.map((card: any) => ({
            term: card.term,
            definition: card.definition,
            src: card.src ?? "",
            timesCorrect: 0,
            attempts: 0,
          })),
        },
      },
      include: {
        flashcards: true, // Return flashcards in the response
      },
    });

    return NextResponse.json(newSet, { status: 201 });
  } catch (err: any) {
    console.error("POST /api/sets failed:", err);
    return NextResponse.json(
      { error: "Failed to create set", reason: err.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
