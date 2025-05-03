"use client";
import React, { useEffect, useState } from "react";
import Video from "./Video"; // Adjust if path is different
import { QuestionDrawer } from "../question-drawer/QuestionDrawer";
import { useParams, useSearchParams } from "next/navigation";

export default function VideoScroller() {
  const searchParams = useSearchParams();
  const id = searchParams.get("setId");

  const [flashcards, setFlashcards] = useState<FlashCard[]>([]);
  const [activeFlashcard, setActiveFlashcard] = useState<FlashCard | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchSet = async () => {
      try {
        const res = await fetch(`/api/sets/${id}`);
        const data = await res.json();
        setFlashcards(data.flashcards);
      } catch (error) {
        console.error("Failed to load flashcards", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSet();
  }, [id]);

  if (isLoading) {
    return <div className="text-center p-10 text-xl">Loading...</div>;
  }

  return (
    <div className="relative overflow-y-scroll snap-y snap-mandatory h-screen">
      {flashcards.map((flashcard) => (
        <Video
          key={flashcard.id}
          flashcard={flashcard}
          setActiveFlashcard={setActiveFlashcard}
        />
      ))}
      {activeFlashcard && (
        <div className="fixed bottom-6 right-6 z-2">
          <QuestionDrawer flashcard={activeFlashcard} />
        </div>
      )}
    </div>
  );
}
