import Image from "next/image";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import styles from "./cardcoupone.module.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface CardCouponProps {
  images: string[];
  altTexts?: string[]; // Optional alt texts for images
  width?: number | string;
  height?: number | string;
  minInterval?: number; // Minimum interval time in milliseconds
  maxInterval?: number;
  discount: number; // Maximum interval time in milliseconds
}

const getRandomInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const CardCoupon: React.FC<CardCouponProps> = ({
  images,
  altTexts = [],
  discount,
  minInterval = 3000,
  maxInterval = 6000,
}) => {
  const { isVisible, elementRef } = useIntersectionObserver();
  const [index, setIndex] = useState<number>(0);

  const nextImage = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const altText = useMemo(
    () =>
      altTexts[index] ||
      `Coupon image ${index + 1} of ${images.length}` ||
      "Coupon view",
    [altTexts, index, images.length]
  );

  useEffect(() => {
    if (!isVisible || images.length === 0) return;

    let timerId: NodeJS.Timeout;

    const cycleImages = () => {
      nextImage();
      const randomInterval = getRandomInterval(minInterval, maxInterval);
      timerId = setTimeout(cycleImages, randomInterval); // Schedule the next cycle
    };

    timerId = setTimeout(
      cycleImages,
      getRandomInterval(minInterval, maxInterval)
    );

    // Clean up the timeout if the component is no longer visible
    return () => {
      clearTimeout(timerId);
    };
  }, [isVisible, images.length, minInterval, maxInterval, nextImage]);

  return (
    <div className={styles.card_container} ref={elementRef}>
      {images.length > 0 && (
        <>
          <p
            data-aos="fade-left"
            className="absolute bg-red-500 bg-opacity-85 py-1 px-2 text-white text-sm font-thin sm:font-medium sm:text-base top-2 sm:top-8 right-0"
          >
            <span className="inline sm:hidden">-</span>
            {discount}% <span className="hidden sm:inline">OFF</span>
          </p>

          <Image
            src={images[index]}
            width={100}
            height={100}
            alt={altText}
            sizes="(max-width: 600px) 33vw, (max-width: 1238px) 25vw, 20vw"
            unoptimized={true} // Enable optimization
            className={styles.coupon_image}
            loading="lazy"
          />
        </>
      )}
    </div>
  );
};

export default CardCoupon;
