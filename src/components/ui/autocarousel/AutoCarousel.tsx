"use client";
import React, { useEffect, useState, useCallback } from "react";
import "./autoCarousel.css";
import Slider from "react-slick";
import ViewCard from "@/components/ui/view_card/ViewCard";
import Skilliton from "@/components/ui/autocarousel/Skilliton";

interface IAutoCarousel {
  img_src?: string;
  vid_src?: string;
  img_fallback?: string;
}

function AutoCarousel({
  data,
  reverse,
}: {
  data: IAutoCarousel[];
  reverse?: boolean;
}) {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  // Debounced window resize handler for better performance
  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const slidesToShow = Math.max(1, windowWidth! / 365);
  console.log(slidesToShow);
  const sliderSettings = React.useMemo(
    () => ({
      infinite: true,
      slidesToShow,
      slidesToScroll: 1,
      autoplay: true,
      speed: 9000 - slidesToShow * 1000,
      autoplaySpeed: 0,
      cssEase: "linear",
      rtl: reverse || false,
      pauseOnHover: false,
    }),
    [slidesToShow, reverse] // Recalculate when the number of slides to show or reverse changes
  );

  // If windowWidth is not yet set or data is empty, show loader or empty state
  if (windowWidth === null || !data || data.length === 0) {
    return <Skilliton />; // Consider improving the "Skilliton" loading experience if necessary
  }

  return (
    <section>
      <div className="slider-container">
        <Slider {...sliderSettings}>
          {data.map((item, index) => (
            <ViewCard
              img_src={item.img_src}
              vid_src={item.vid_src}
              img_fallback={item.img_fallback}
              index={index}
              key={index}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default AutoCarousel;
