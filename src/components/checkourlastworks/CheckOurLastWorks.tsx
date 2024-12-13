"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./LastWorks.module.css";
const LastWorkCard = React.lazy(
  () => import("../ui/lastWorkCard/LastWorkCard")
);
import latestWork from "@/data/latestWork";

function CheckOurLastWorks() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const [maxScrollValue, setMaxScrollValue] = useState(0);
  const [translateX, setTranslateX] = useState(0); // Track the translateX value

  // Update window width and max scroll value on resize
  useEffect(() => {
    const updateWindowWidth = () => {
      const newMaxScrollValue = 1110 - (window.innerWidth - 580);
      setMaxScrollValue(newMaxScrollValue);
    };

    window.addEventListener("resize", updateWindowWidth);
    updateWindowWidth(); // Call initially to set the max scroll value
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  // When mouse button is pressed down
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true); // Start dragging
    setStartX(e.clientX); // Capture the initial X position
  };

  // When mouse is moved (only works when dragging)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;

    const distanceMoved = e.clientX - startX; // Calculate how far the mouse has moved
    const newTranslateX = translateX + distanceMoved; // Update translateX value

    // Ensure the translateX stays within bounds
    if (newTranslateX > 0) {
      setTranslateX(0); // Prevent scrolling beyond the right edge
    } else if (newTranslateX < -maxScrollValue) {
      setTranslateX(-maxScrollValue); // Prevent scrolling beyond the left edge
    } else {
      setTranslateX(newTranslateX); // Update translateX value
    }

    // Update startX to calculate the next distance
    setStartX(e.clientX);
  };

  // Stop dragging when mouse is released or leaves the container
  const handleMouseUpOrLeave = () => {
    setIsDragging(false); // Stop dragging
  };

  return (
    <section className={styles.main_latest_works}>
      <div className={styles.top_Part}>
        <div className={styles.content}>
          <div className={styles.title_Container}>
            <h1 data-aos="fade-right">CHECK OUT OUR LATEST WORK!</h1>
          </div>
          <div className={styles.main_Scroll}>
            <div
              className={styles.trace_container}
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              style={{
                cursor: isDragging ? "grabbing" : "grab",
                transform: `translateX(${translateX}px)`, // Apply translateX to move the container
                transition: "transform 0s", // Disable transition during drag
              }}
            >
              {latestWork.map((item, index) => (
                <LastWorkCard
                  defaultImage={item.defaultImage}
                  hoverImage={item.hoverImage}
                  key={index}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom_Part}>
        <p>Events / Portrait photographer / Weddings & film maker</p>
      </div>
    </section>
  );
}

export default CheckOurLastWorks;
