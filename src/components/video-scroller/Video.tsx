"use client";
import React, { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { QuestionDrawer } from "../question-drawer/QuestionDrawer";

interface VideoProps {
  flashcard: FlashCard;
  setActiveFlashcard: (flashcard: FlashCard) => void;
}

export default function Video({ flashcard, setActiveFlashcard }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          video.play().catch(() => {});
          setActiveFlashcard(flashcard); // Notify parent
        } else {
          video.pause();
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
  }, [flashcard.id, setActiveFlashcard]);

  const handlePause = () => {
    const vid = videoRef.current;
    if (!vid) return;

    if (vid.paused) {
      vid.play();
    } else {
      vid.pause();
    }
  };

  return (
    <div
      className="h-screen snap-center flex justify-center items-center overflow-hidden"
      ref={containerRef}
    >
      <video
        ref={videoRef}
        className="max-h-full w-full object-contain"
        preload="auto"
        playsInline
        autoPlay
        loop
        onClick={handlePause}
      >
        <source src="/example.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
