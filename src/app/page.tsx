import React from "react";
import styles from "./page.module.css";
import AutoSlider from "@/components/about/autoSlideHero/AutoSlider";
import Blog from "@/components/ui/blog/Blog";
// const Blog = React.lazy(() => import("@/components/ui/blog/Blog"));
const CheckOurLastWorks = React.lazy(
  () => import("@/components/checkourlastworks/CheckOurLastWorks")
);
const Behindtheagency = React.lazy(
  () => import("@/components/behindtheagency/Behindtheagency")
);
const Steps = React.lazy(() => import("@/components/steps/Steps"));
const Contactus = React.lazy(() => import("@/components/contactus/Contactus"));

export default function Home() {
  return (
    <main className={styles.homePage_Container}>
      <AutoSlider />
      <Blog />
      <div id="latestworks">
        <CheckOurLastWorks />
      </div>
      <Behindtheagency />
      <Steps />
      <div id="contactus">
        <Contactus />
      </div>
    </main>
  );
}
