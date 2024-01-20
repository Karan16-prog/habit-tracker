"use client";
import { ModeToggle } from "@/components/darkModeToggleBtn";
import HomeBar from "@/components/home-bar";
import TaskCard from "@/components/task-card";
import Image from "next/image";
import { useState, useEffect } from "react";
import ConfettiComponent from "@/components/confetti";
import HomeBtnWrapper from "@/components/home-buttons";
import GardenSlice from "@/components/garden/garden";
import HomeFooter from "@/components/footer";

export default function Home() {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(true);
  }, []);
  return (
    <div>
      {/* <ModeToggle /> */}
      <HomeBar />

      <h1 className="text-5xl font-bold">Build habits</h1>
      <h1 className="text-5xl font-bold text-primary">you won't quit</h1>

      <TaskCard />
      <HomeBtnWrapper />

      <GardenSlice />

      <HomeFooter />
    </div>
  );
}

// In my server component can I define a function and the pass it to a client component
