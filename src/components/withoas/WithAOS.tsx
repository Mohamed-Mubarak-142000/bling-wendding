"use client";
import React, { ReactNode, useEffect } from "react";
import AOS from "aos";
interface IWithAOS {
  children: ReactNode;
}

function WithAOS({ children }: IWithAOS) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return <>{children}</>;
}

export default WithAOS;
