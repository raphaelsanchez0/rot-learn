"use client";
import React, { useEffect, useRef, useState } from "react";
import { QuestionDrawer } from "../question-drawer/QuestionDrawer";

interface VideoProps {
  flashcard: FlashCard;
  setActiveFlashcard: (flashcard: FlashCard) => void;
}

// Global flag to track user interaction
let hasUserInteracted = false;

export default function Video({ flashcard, setActiveFlashcard }: VideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canPlayAudio, setCanPlayAudio] = useState(false);

  const speakViaApi = async (text: string) => {
    if (!canPlayAudio) return;

    try {
      const res = await fetch("/api/speak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();
      if (!data.audioBase64) throw new Error("No audio received");

      const audioBlob = base64ToBlob(data.audioBase64, "audio/mpeg");
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      await audio.play(); // this will now succeed after interaction
    } catch (error) {
      console.error("TTS failed", error);
    }
  };

  const base64ToBlob = (base64: string, mime: string): Blob => {
    const binary = atob(base64);
    const buffer = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      buffer[i] = binary.charCodeAt(i);
    }
    return new Blob([buffer], { type: mime });
  };

  useEffect(() => {
    const handleUserInteraction = () => {
      hasUserInteracted = true;
      setCanPlayAudio(true);
      document.removeEventListener("click", handleUserInteraction);
    };

    // Wait for the first user interaction
    document.addEventListener("click", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveFlashcard(flashcard);
          speakViaApi(`${flashcard.term}. ${flashcard.definition}`);
        }
      },
      { threshold: 0.6 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [flashcard.id, canPlayAudio]);

  return (
    <div
      className="h-screen snap-center flex justify-center items-center overflow-hidden"
      ref={containerRef}
    >
      <div className="text-5xl font-bold mb-4">{flashcard.term}</div>
    </div>
  );
}
