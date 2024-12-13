"use client";

import React, { useMemo } from "react";
import styles from "./herogrid.module.css";
import { Tables } from "../../../../database.types";
import HeroCard from "./heroCard/HeroCard";

function HeroCoupons({ data }: { data: Tables<"vendors">[] }) {
  // Memoize the HeroCard rendering to avoid unnecessary re-renders
  const renderedHeroCards = useMemo(
    () => data?.map((item, index) => <HeroCard item={item} key={index} />),
    [data] // Only recompute when `data` changes
  );

  // Memoize the skeleton loader rendering
  const skeletonLoaders = useMemo(
    () =>
      Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          style={{
            width: "100%",
            height: "560px",
            background: "#e0e0e0",
          }}
          className="skeliton"
        ></div>
      )),
    [] // This array is static, so it doesn't need to depend on any state
  );

  return (
    <section className={styles.main_hero_grid}>
      {renderedHeroCards}
      {data.length === 0 && skeletonLoaders}
    </section>
  );
}

export default HeroCoupons;
