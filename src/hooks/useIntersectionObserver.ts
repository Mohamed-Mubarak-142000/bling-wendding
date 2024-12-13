"use client";

import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (notset?: true) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (notset) {
            observer.disconnect();
          }
        } else {
          if (!notset) {
            setIsVisible(false);
          }
        }
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 0.01,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [notset]);

  return { isVisible, elementRef };
};
