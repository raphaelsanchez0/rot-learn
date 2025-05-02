"use client";
import React, { useRef, useState } from "react";

interface VideoProps {
  videoId: string;
}

export default function Video({ videoId }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const handleClick = () => {
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
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        className="max-h-full w-full object-contain"
        preload="auto"
        playsInline
        autoPlay
        loop
        muted
      >
        <source src="/example.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
