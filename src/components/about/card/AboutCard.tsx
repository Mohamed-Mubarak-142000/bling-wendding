import Image from "next/image";
import React from "react";
import styles from "./aboutcard.module.css";

export interface ICategory {
  image: string;
  title: string;
}

interface AboutCardProps {
  category: ICategory;
}

const AboutCard: React.FC<AboutCardProps> = ({ category }) => {
  return (
    <div className={styles.card_container} data-aos="zoom-in-out">
      {/* Use a fixed width and height for the image */}
      <div className="relative w-full h-[200px]">
        {" "}
        {/* Adjust the height as necessary */}
        <Image
          src={category.image}
          alt={category.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h6>{category.title}</h6>
    </div>
  );
};

export default AboutCard;
