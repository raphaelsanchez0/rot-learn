import { PrismaClient } from "@/generated/prisma"; // or "@prisma/client" if you're using default output
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, flashcards } = body;

    if (!name || !Array.isArray(flashcards)) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

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
        flashcards: true,
      },
    });

    return NextResponse.json(newSet, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to create set" },
      { status: 500 }
    );
  }
}
