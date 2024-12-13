"use client";
import React, { useEffect, useRef, useState } from "react";
import "./mobile.css";
import Image from "next/image";

interface IMobileframe {
  video?: string;
  image?: string;
  fallback?: string;
}

function MobileFrame({ video, image, fallback }: IMobileframe) {
  const [isVisible, setIsVisible] = useState<boolean>(false); // To track if the component is in the viewport
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  // To track if the video is loaded
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to check if the component is in the viewport
  useEffect(() => {
    const currentElement = containerRef.current; // Capture the ref value

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "900px 100px", // Preload the content slightly before it enters the viewport
        threshold: 0.01, // Load when 10% of the component is visible
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []); // No need to include `containerRef` in the dependencies

  const commonStyle: React.CSSProperties = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    borderRadius: "28px",
    display: "block",
  };
  {
    console.log(isVisible);
  }
  return (
    <div className="mobile_container" ref={containerRef}>
      <div className="specker_notch">
        <p className="speker_ele"></p>
        <p className="camera_ele"></p>
      </div>
      <p className="button left_top_btn"></p>
      <p className="button left_avarage_btn"></p>
      <p className="button left_bottom_btn"></p>
      <p className="button right_btn"></p>
      <div className="mobile_content">
        {/* Lazy-load the image */}

        {image && isVisible && (
          <Image
            style={commonStyle}
            src={image}
            alt="product"
            fill
            loading="lazy"
            placeholder="blur"
            blurDataURL={fallback} // Optional blur placeholder
          />
        )}

        {/* Lazy-load the video */}
        {video && isVisible && (
          <>
            <video
              src={video}
              loop
              autoPlay
              muted
              playsInline
              poster={fallback}
              preload="auto" // Start loading the video early
              style={{
                ...commonStyle,
                display: isVideoLoaded ? "block" : "none",
              }}
              onLoadedData={() => setIsVideoLoaded(true)}
            />

            {!isVideoLoaded && fallback && (
              <Image
                src={fallback}
                alt="Loading Video"
                fill
                style={{ ...commonStyle, position: "absolute" }}
                loading="lazy"
                placeholder="blur"
                blurDataURL={fallback}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default MobileFrame;
