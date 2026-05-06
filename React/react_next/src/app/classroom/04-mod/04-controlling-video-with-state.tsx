"use client";

import { VideoPlayer } from "@/components/04-mod/04-video-player";
import { useState } from "react";

const Page = () => {
  // Video playback state
  const [playing, setPlaying] = useState(false);

  return (
    <div className="mb-4 border border-white p-3">
      <div>
        <p className="mb-3 text-2xl text-blue-700">
          {playing ? "Playing" : "Paused"}
        </p>

        <button
          className="rounded-md bg-blue-700 p-3 text-black"
          onClick={() => setPlaying(!playing)}
        >
          Play / Pause
        </button>
      </div>

      <VideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-video/flower.mp4"
        isPlaying={playing}
      />
    </div>
  );
};

export default Page;

/*
==========================================================
  CLASS 4: Controlling Video with State
==========================================================

This example demonstrates how state can control
external behavior inside components.

Concepts covered:
- useState
- Boolean state
- Toggle actions
- Passing state via props
- Media control
- Parent and child communication

The parent component controls the video state
through the isPlaying prop.
*/