import React from "react";
import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.about_container}>
      <h1 data-aos="zoom-in-out">ABOUT US</h1>
      <div className={styles.afterTitle} data-aos="zoom-in-out">
        <div className={styles.triangle_left}></div>
        <p className={styles.line}></p>
        <div className={styles.triangle_right}></div>
      </div>
      <p className={styles.first} data-aos="zoom-in-out">
        We&apos;re more than just photographers; we&apos;re storytellers
        passionate about capturing the real, raw, and timeless moments of your
        love story.
      </p>
      <p className={styles.second} data-aos="zoom-in-out">
        From the first glance to the last dance, we blend artistry with
        authenticity to preserve every heartfelt detail of your wedding day. We
        believe each couple’s love is unique, and our goal is to create moments
        that reflect your personalities and connection.
      </p>
    </div>
  );
}

export default About;
