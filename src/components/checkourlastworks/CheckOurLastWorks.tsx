"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./LastWorks.module.css";
const LastWorkCard = React.lazy(
  () => import("../ui/lastWorkCard/LastWorkCard")
);
import latestWork from "@/data/latestWork";

const debounce = (func: Function, delay: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

function CheckOurLastWorks() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [maxScrollValue, setMaxScrollValue] = useState(0);
  const [translateX, setTranslateX] = useState(0); // Track the translateX value

  const updateWindowWidth = useCallback(() => {
    const newMaxScrollValue = 1110 - (window.innerWidth - 580);
    setMaxScrollValue(newMaxScrollValue);
  }, []);

  useEffect(() => {
    updateWindowWidth();
    const debouncedUpdateWindowWidth = debounce(updateWindowWidth, 200);
    window.addEventListener("resize", debouncedUpdateWindowWidth);

    return () => {
      window.removeEventListener("resize", debouncedUpdateWindowWidth);
    };
  }, [updateWindowWidth]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.clientX);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;

      const distanceMoved = e.clientX - startX;
      const newTranslateX = translateX + distanceMoved;

      if (newTranslateX > 0) {
        setTranslateX(0);
      } else if (newTranslateX < -maxScrollValue) {
        setTranslateX(-maxScrollValue);
      } else {
        setTranslateX(newTranslateX);
      }

      setStartX(e.clientX);
    },
    [isDragging, startX, maxScrollValue, translateX]
  );

  const handleMouseUpOrLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

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
                transform: `translateX(${translateX}px)`,
                transition: "transform 0s",
              }}
            >
              {/* Lazy-loaded LastWorkCard */}
              <React.Suspense fallback={<div>Loading...</div>}>
                {latestWork.map((item, index) => (
                  <LastWorkCard
                    defaultImage={item.defaultImage}
                    hoverImage={item.hoverImage}
                    key={index}
                    index={index}
                  />
                ))}
              </React.Suspense>
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
