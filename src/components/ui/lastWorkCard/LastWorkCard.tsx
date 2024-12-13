import React from "react";
import styles from "./lastworkcard.module.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
interface CardProps {
  // title: string;
  // year: string;
  index: number;
  defaultImage: string;
  hoverImage: string;
}

const LastWorkCard: React.FC<CardProps> = ({
  // title,
  // year,
  index,
  defaultImage,
  hoverImage,
}) => {
  const { isVisible, elementRef } = useIntersectionObserver(true);
  return (
    <div
      ref={elementRef}
      data-aos="fade-left"
      data-aos-delay={index * 50}
      className={styles.card}
      style={
        isVisible
          ? ({
              "--defaultImage": `url(${defaultImage})`,
              "--hoverImage": `url(${hoverImage})`,
            } as React.CSSProperties)
          : {}
      }
    >
      <div className={styles.img_Container}></div>
    </div>
  );
};

export default LastWorkCard;
