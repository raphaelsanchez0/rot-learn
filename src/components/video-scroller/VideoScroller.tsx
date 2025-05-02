"use client";
import React, { useState } from "react";
import Video from "./Video";
import { QuestionDrawer } from "../question-drawer/QuestionDrawer";
const flashcards: FlashCard[] = [
  {
    src: "example.mp4",
    term: "Photosynthesis",
    definition:
      "The process by which green plants use sunlight to synthesize food.",
    id: 1,
    timesCorrect: 4,
    attempts: 6,
  },
  {
    src: "example.mp4",
    term: "Mitosis",
    definition: "A type of cell division that results in two daughter cells.",
    id: 2,
    timesCorrect: 2,
    attempts: 5,
  },
  {
    src: "example.mp4",
    term: "Osmosis",
    definition:
      "The movement of water molecules through a semipermeable membrane.",
    id: 3,
    timesCorrect: 1,
    attempts: 3,
  },
];

export default function VideoScroller() {
  const [activeFlashcard, setActiveFlashcard] = useState<FlashCard | null>(
    null
  );

  return (
    <div className="relative overflow-y-scroll snap-y snap-mandatory h-screen">
      {/* <Video questionID="example" />
      <Video questionID="example" />
      <Video questionID="example" /> */}
      {flashcards.map((flashcard, index) => (
        <Video
          key={index}
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
