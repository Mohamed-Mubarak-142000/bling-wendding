"use client";
import React from "react";
import styles from "./behindtheagency.module.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
function Behindtheagency() {
  const { isVisible, elementRef } = useIntersectionObserver(true);
  return (
    <section className={styles.main_behind_agency} ref={elementRef}>
      <div className={styles.title_Container}>
        <div className={styles.img_container}>
          <h1>BEHIND the AGENCY</h1>
          <div
            data-aos="fade-right"
            style={isVisible ? { backgroundImage: "url(/Esraa.webp)" } : {}}
            className={styles.Image}
          ></div>
        </div>
      </div>
      <div style={{ overflow: "hidden" }} className={styles.texts}>
        <h2 data-aos="fade-left">
          A Wedding Planner’s Approach to Luxury Wedding Day Content Creation
        </h2>
        <p data-aos="fade-left">
          In the world of luxury wedding content creation, every detail matters.
          As someone with years of experience in the industry, Esraa Elsayad
          understands this intimately. With her venture, BLING WEDDINGS, Esraa
          has successfully combined her expertise and keen eye to offer content
          creation services that focus on capturing the essence of your special
          day with precision and artistry.
        </p>
        <p className={styles.signature} data-aos="fade-up">
          Esraa Elsayad
          <br /> <span>Founder & Creative Director</span>
        </p>
      </div>
    </section>
  );
}

export default Behindtheagency;
