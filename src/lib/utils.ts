import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

async function playBase64AudioFromApi(text: string) {
  const res = await fetch("/api/speak", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  const data = await res.json();

  if (!data.audioBase64) return;

  // Convert base64 to Blob and play
  const audioBlob = base64ToBlob(data.audioBase64, "audio/mpeg");
  const audioUrl = URL.createObjectURL(audioBlob);
  const audio = new Audio(audioUrl);
  audio.play();
}

// Helper function
function base64ToBlob(base64: string, mime: string) {
  const binary = atob(base64);
  const len = binary.length;
  const buffer = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    buffer[i] = binary.charCodeAt(i);
  }
  return new Blob([buffer], { type: mime });
}
