"use client";
import React, { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { QuestionDrawer } from "../question-drawer/QuestionDrawer";

interface VideoProps {
  flashcard: FlashCard;
}

export default function Video({ flashcard }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          video.play().catch(() => {}); // Safe autoplay attempt
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.6, // 60% visible = active
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

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
      <div className="fixed bottom-6 right-6 z-2">
        <QuestionDrawer flashcard={flashcard} />
      </div>
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
