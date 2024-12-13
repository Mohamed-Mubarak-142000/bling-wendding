import React from "react";
import styles from "./mainTitle.module.css";
function MainTitle({ title }: { title: string }) {
  return (
    <div className={styles.main_title}>
      <h1 data-aos="zoom-in">{title}</h1>
    </div>
  );
}

export default MainTitle;
