import { PrismaClient } from "@/generated/prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

/**
 * GET /api/sets/[id]
 *
 * Fetches a flashcard set by its ID, including all flashcards within that set.
 *
 * @param request - The incoming request object
 * @param context - Contains dynamic route params (expected: { id })
 *
 * @returns 200 with the set and its flashcards,
 *          400 if the ID is invalid,
 *          404 if the set is not found,
 *          500 for any server error
 */
export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const numericId = parseInt(id);

    if (isNaN(numericId)) {
      return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
    }

    const set = await prisma.set.findUnique({
      where: { id: numericId },
      include: { flashcards: true },
    });

    if (!set) {
      return NextResponse.json(
        { error: `No set found with ID ${numericId}` },
        { status: 404 }
      );
    }

    return NextResponse.json(set);
  } catch (error: any) {
    console.error("GET /api/sets/[id] failed:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        reason: error.message ?? "Unknown error",
      },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/sets/[id]
 *
 * Updates an existing flashcard set by:
 * - Replacing the set's name
 * - Deleting old flashcards
 * - Creating new flashcards from request body
 *
 * Request body must be JSON with:
 * {
 *   name: string,
 *   flashcards: Array<{
 *     term: string,
 *     definition: string,
 *     src?: string,
 *     timesCorrect?: number,
 *     attempts?: number
 *   }>
 * }
 *
 * @param request - The incoming request containing updated data
 * @param context - Contains dynamic route params (expected: { id })
 *
 * @returns 200 with the updated set and new flashcards,
 *          400 if input is invalid,
 *          500 for any server error
 */
export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const numericId = parseInt(id);

    if (isNaN(numericId)) {
      return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
    }

    const body = await request.json();
    const { name, flashcards } = body;

    if (!name || !Array.isArray(flashcards)) {
      return NextResponse.json(
        { error: "Missing or invalid name or flashcards array" },
        { status: 400 }
      );
    }

    // Remove all existing flashcards for the set
    await prisma.flashCard.deleteMany({
      where: { setId: numericId },
    });

    // Update set and insert new flashcards
    const updatedSet = await prisma.set.update({
      where: { id: numericId },
      data: {
        name,
        flashcards: {
          create: flashcards.map((card: any) => ({
            term: card.term,
            definition: card.definition,
            src: card.src ?? "",
            timesCorrect: card.timesCorrect ?? 0,
            attempts: card.attempts ?? 0,
          })),
        },
      },
      include: { flashcards: true },
    });

    return NextResponse.json(updatedSet);
  } catch (error: any) {
    console.error("PUT /api/sets/[id] failed:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        reason: error.message ?? "Unknown error",
      },
      { status: 500 }
    );
  }
}
