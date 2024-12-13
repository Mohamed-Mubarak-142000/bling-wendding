import React from "react";
const HeroSection = React.lazy(
  () => import("@/components/vlogs/herosection/HeroSection")
);
const MyVlogs = React.lazy(() => import("@/components/vlogs/myvlogs/MyVlogs"));
const OnInstagrame = React.lazy(
  () => import("@/components/vlogs/oninstagrame/OnInstagrame")
);
const StorySection = React.lazy(
  () => import("@/components/vlogs/storysection/StorySection")
);

function page() {
  return (
    <div className="main_Margin overflow-x-hidden relative">
      <HeroSection />
      <MyVlogs />
      <StorySection />
      <OnInstagrame />
    </div>
  );
}

export default page;
