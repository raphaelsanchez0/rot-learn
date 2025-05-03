import { PrismaClient } from "@/generated/prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

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
      include: {
        flashcards: true,
      },
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

    await prisma.flashCard.deleteMany({
      where: { setId: numericId },
    });

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
      include: {
        flashcards: true,
      },
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
