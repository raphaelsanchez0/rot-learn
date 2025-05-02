import React from "react";
import Video from "./Video";

export default function VideoScroller() {
  return (
    <div className="relative overflow-y-scroll snap-y snap-mandatory h-screen">
      <Video videoId="example" />
      <Video videoId="example" />
      <Video videoId="example" />
    </div>
  );
}
