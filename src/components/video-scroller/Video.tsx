import React from "react";

interface VideoProps {
  videoId: string;
}

export default function Video({ videoId }: VideoProps) {
  return (
    <div className="h-screen snap-center flex justify-center items-center overflow-hidden">
      <video
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
