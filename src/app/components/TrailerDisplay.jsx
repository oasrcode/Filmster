"use client";
import YouTube from "react-youtube";
// thumbnail  <img
// src={`https://img.youtube.com/vi/${prop.key}/hqdefault.jpg`}
// alt="Thumbnail"
// />
export default function TrailerDisplay({ prop }) {
  const opts = {
    height: "100%",
    width: "100%",

    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };
  return (
    <>
     
      <YouTube
        className="aspect-video h-screen w-full"
        videoId={prop.key}
        opts={opts}
        onReady={onReady}
      />
     
    </>
  );
}
