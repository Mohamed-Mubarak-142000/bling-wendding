"use client";
import React, { useMemo } from "react";
import carouselData from "@/data/carouselData";
import AutoCarousel from "@/components/ui/autocarousel/AutoCarousel";

function AutoSlider() {
  const memoizedCarouselData = useMemo(
    () => ({
      line1: carouselData.line1,
      line2: carouselData.line2,
      line3: carouselData.line3,
    }),
    [carouselData]
  );

  const getReverse = (lineIndex: number) => {
    return lineIndex === 2;
  };

  return (
    <section className="flex flex-col gap-2 mt-4 md:mt-0">
      <div className="max-w-[1077px] mx-auto mt-2 mb-12 px-5 text-center hidden md:block">
        <h1
          className="text-center font-extrabold my-12   md:text-6xl xl:text-[4.7rem]"
          data-aos="zoom-out"
        >
          Artfully Capturing Memories
        </h1>
        <p
          className="text-center  text-sm md:text-lg  mx-auto mb-6 max-w-[950px]"
          data-aos="zoom-in"
        >
          There’s nothing more incredible than finding the one person you can’t
          live without. Our mission is to document your wedding day in a way
          that feels authentic, so that years from now, you can relive each
          incredible moment.
        </p>
      </div>
      {/* Use memoized data and dynamic reverse callback */}
      {Object.keys(memoizedCarouselData).map((lineKey, index) => (
        <AutoCarousel
          key={lineKey}
          data={
            memoizedCarouselData[lineKey as keyof typeof memoizedCarouselData]
          }
          reverse={getReverse(index)}
        />
      ))}
    </section>
  );
}

export default AutoSlider;
