"use client";
import React, { useState } from "react";
import vlogsvideo from "@/data/vlogsvideo";
import Image from "next/image";
import styles from "./myvlogs.module.css";
const VideoPlayer = React.lazy(
  () => import("@/components/ui/videoplayer/VideoPlayer")
);
import "../../ui/videoplayer/common.css";
const MainTitle = React.lazy(() => import("../maintitle/MainTitle"));
interface IVideo {
  video_src: string;
  image_src: string;
}
function MyVlogs() {
  const [video_src, setVideo_src] = useState<string>("");
  const handleUpdateStates = (item: IVideo) => {
    setVideo_src(item.video_src);
  };

  return (
    <section className={styles.main_vlog_section}>
      <MainTitle title="MY VLOG" />
      <div className={styles.second_pink}>
        <div className={styles.first_black}></div>
        <div className={styles.video_Container} data-aos="zoom-in">
          {video_src ? (
            <VideoPlayer video_src={video_src} />
          ) : (
            <div
              className="video_img_Container"
              data-aos="zoom-out"
              style={{ backgroundImage: `url(${vlogsvideo[0].image_src})` }}
            >
              <button
                className={styles.play_btn}
                onClick={() => {
                  if (setVideo_src) {
                    setVideo_src("/vlogs.mp4"); // Call only if defined
                  }
                }}
              >
                <span>
                  <Image
                    src="/svgs/play-solid.svg"
                    width={15}
                    height={15}
                    alt="play Icon"
                  />
                </span>{" "}
                Play Video
              </button>
            </div>
          )}
          <h2 data-aos="fade-right">More on this channel</h2>
          <div className={styles.other_Videos}>
            {vlogsvideo.map((item, index) => (
              <div
                key={index}
                className={styles.gallery_Item}
                data-aos="zoom-out"
              >
                <Image
                  src={item.image_src}
                  width={200}
                  alt="image_view"
                  height={160}
                  quality={100}
                  onClick={() => handleUpdateStates(item)}
                  className={`${styles.image_gallery} ${
                    item.video_src === video_src
                      ? `${styles.image_selected}`
                      : `${styles.image_unselected}`
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyVlogs;
