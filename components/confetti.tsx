"use client";
import React from "react";
import Confetti from "react-confetti";
import useWindowSize from "@/app/hooks/window-size";

const ConfettiComponent = () => {
  const { width, height } = useWindowSize();
  console.log(width, height);
  return (
    <Confetti
      width={width}
      height={height}
      confettiSource={{
        x: 300,
        y: 0,
        w: 0,
        h: 300,
      }}
    />
  );
};

export default ConfettiComponent;
