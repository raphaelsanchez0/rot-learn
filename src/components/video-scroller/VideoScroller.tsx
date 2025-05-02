import React from "react";
import Video from "./Video";

export default function VideoScroller() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Video videoId="example" />
      <Video videoId="example" />
      <Video videoId="example" />
    </div>
  );
}
