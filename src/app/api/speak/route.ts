import { SpeechifyClient } from "@speechify/api";
import { NextResponse } from "next/server";

const client = new SpeechifyClient({
  token: "5Aq-v-zmYCWLlXPQQXY0EcrxqgftnHk0eZXzEnKNTjA=",
});

export async function POST(req: Request) {
  try {
    const { text, voiceId, rate, pitch } = await req.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'text'" },
        { status: 400 }
      );
    }

    const response = await client.tts.audio.speech({
      input: text,
      voiceId: voiceId || "fb5cd72b-bd8a-4bfb-b868-8998a999cd74",
    });

    return NextResponse.json({ audioBase64: response.audioData });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Failed to synthesize audio",
        reason: error.message ?? "Unknown error",
      },
      { status: 500 }
    );
  }
}
