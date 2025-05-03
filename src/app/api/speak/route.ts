import { SpeechifyClient } from "@speechify/api";
import { NextResponse } from "next/server";

/**
 * POST /api/speak
 *
 * Accepts text input and returns synthesized speech audio as a base64-encoded string.
 *
 * Request Body:
 * {
 *   text: string,               // Required text to synthesize
 *   voiceId?: string,           // Optional voice ID
 *   rate?: number,              // Optional rate (currently unused)
 *   pitch?: number              // Optional pitch (currently unused)
 * }
 *
 * Response:
 * {
 *   audioBase64: string         // Base64-encoded audio data
 * }
 */

const client = new SpeechifyClient({
  token: process.env.SPEECH_AI_KEY!, // Use environment variable instead of hardcoding
});

export async function POST(req: Request) {
  try {
    const { text, voiceId } = await req.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'text'" },
        { status: 400 }
      );
    }

    const response = await client.tts.audio.speech({
      input: text,
      voiceId: voiceId || "fb5cd72b-bd8a-4bfb-b868-8998a999cd74", // Default voice
    });

    return NextResponse.json({ audioBase64: response.audioData });
  } catch (error: any) {
    console.error("POST /api/speak failed:", error);
    return NextResponse.json(
      {
        error: "Failed to synthesize audio",
        reason: error.message ?? "Unknown error",
      },
      { status: 500 }
    );
  }
}
