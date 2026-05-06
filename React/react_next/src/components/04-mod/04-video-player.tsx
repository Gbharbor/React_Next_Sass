import { useEffect, useRef } from "react";

type Props = {
  src: string;
  isPlaying: boolean;
};

export const VideoPlayer = ({
  src,
  isPlaying,
}: Props) => {
  // Reference to the video element
  const videoTag =
    useRef<HTMLVideoElement>(null);

  // Control video playback
  useEffect(() => {
    if (isPlaying) {
      videoTag.current?.play();
    } else {
      videoTag.current?.pause();
    }
  }, [isPlaying]);

  return (
    <video
      ref={videoTag}
      src={src}
      loop
      playsInline
    />
  );
};