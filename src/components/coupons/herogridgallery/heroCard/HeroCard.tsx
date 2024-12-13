import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import styles from "../herogrid.module.css";
import { Tables } from "../../../../../database.types";

function HeroCard({ item }: { item: Tables<"vendors"> }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(4); // Track the current image index
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null); // Store the interval ID

  // Memoize the images array to avoid unnecessary re-renders if it doesn't change
  const images = useMemo(() => item.images ?? [], [item.images]);

  // Memoize the image change logic
  const handleMouseEnter = useCallback(() => {
    if (images.length > 1) {
      const id = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          const imagesLength = images.length;
          return imagesLength > 0 ? (prevIndex + 1) % imagesLength : 0;
        });
      }, 1000); // Change every second
      setIntervalId(id);
    }
  }, [images]); // Only re-run if images array changes

  const handleMouseLeave = useCallback(() => {
    setCurrentImageIndex(4); // Reset to the original image index
    if (intervalId) {
      clearInterval(intervalId); // Clear the interval
      setIntervalId(null);
    }
  }, [intervalId]); // Only re-run if intervalId changes

  useEffect(() => {
    return () => {
      // Cleanup interval on component unmount
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div
      className={styles.imageContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${styles.coupon_div} bg-red-500 bg-opacity-75`}>
        -{item.discount}%
      </div>
      {images.length > 0 && (
        <Image
          src={images[currentImageIndex]}
          alt="coupon banner"
          width={100}
          height={100}
          unoptimized={true}
          loading="eager"
          priority
        />
      )}
    </div>
  );
}

export default HeroCard;
