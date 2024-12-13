import React, { useEffect, useRef } from "react";

function VideoPlayer({ video_src }: { video_src: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Play video automatically when `video_src` changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Reload the video element
      videoRef.current.play(); // Start playback
    }
  }, [video_src]);

  return (
    <div className="video_img_Container">
      <video
        className="w-full h-full"
        style={{ objectFit: "cover" }}
        ref={videoRef}
        playsInline
        controls
      >
        <source src={video_src} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;
