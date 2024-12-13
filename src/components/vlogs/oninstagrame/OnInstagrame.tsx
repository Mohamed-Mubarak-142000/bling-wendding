import React from "react";
import styles from "./oninsta.module.css";
const MainTitle = React.lazy(() => import("../maintitle/MainTitle"));
function OnInstagrame() {
  const weLoveText =
    "We love a girl who knows what she wants, and for #MariahCarey it’s an emerald-cut engagement ring. 👏 Find out what she did with each sparkler—including the 35-carat diamond worth $10 million from ex-fiancé James Packerv. 💍";
  const asWeWalk =
    "As you walk down the aisle, elegance meets simplicity. Soft textured florals grow from moss puddles, and a wild lace floral pillar rises gracefully, echoing the iconic stone arach. Every detail, from tactile walls to blooms in the soft sunlight,creates an ethereal journey to the alter. Florals beautifully curated by our member @filmandfoliage";
  return (
    <section>
      <MainTitle title="#BLINGS ON INSTA" />
      <div className={styles.main_grid}>
        <div className={styles.row_1_2}>
          <div
            style={{ backgroundImage: "url(/gallery5.webp)" }}
            className={styles.gallery_item}
            data-aos="fade-right"
          >
            {/* <p>{weLoveText}</p> */}
          </div>
          <div className={styles.col_1_1}>
            <div
              data-aos="fade-right"
              className={styles.gallery_item}
              style={{ backgroundImage: "url(/gallery2.webp)" }}
            >
              <p>{asWeWalk}</p>
            </div>
            <div
              className={styles.gallery_item}
              style={{ backgroundImage: "url(/gallery7.webp)" }}
            >
              <p>{asWeWalk}</p>
            </div>
          </div>
        </div>
        <div className={styles.row_1_1}>
          <div
            data-aos="zoom-out"
            className={styles.gallery_item}
            style={{ backgroundImage: "url(/gallery4.webp)" }}
          >
            <p>{weLoveText}</p>
          </div>
          <div
            data-aos="zoom-out"
            className={styles.gallery_item}
            style={{ backgroundImage: "url(/gallery3.webp)" }}
          >
            <p>{asWeWalk}</p>
          </div>
        </div>
        <div className={styles.row_2_1}>
          <div className={styles.col_1_1}>
            <div
              data-aos="fade-left"
              className={styles.gallery_item}
              style={{ backgroundImage: "url(/gallery6.webp)" }}
            >
              <p>{asWeWalk}</p>
            </div>
            <div
              data-aos="fade-left"
              className={styles.gallery_item}
              style={{ backgroundImage: "url(/gallery1.webp)" }}
            >
              <p>{weLoveText}</p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className={styles.gallery_item}
            style={{ backgroundImage: "url(/2.webp)" }}
          >
            <p>{weLoveText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnInstagrame;
