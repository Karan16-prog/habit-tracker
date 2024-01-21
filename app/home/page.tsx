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
    //lg:flex-row w-full lg:justify-between lg:items-start
    <div className="flex flex-col justify-center items-center p-9 m-auto min-h-screen ">
      {/* <ModeToggle /> */}
      <div className="w-full lg:max-w-screen-sm flex justify-center items-center">
        <HomeBar />
      </div>
      <div className="flex flex-col items-center mt-32 lg:flex-row w-full max-w-screen-lg  lg:justify-between lg:items-start ">
        <div className="text-center flex flex-col">
          <h1 className="text-5xl font-bold">Build habits</h1>

          <h1 className="text-5xl font-bold text-primary">you won't quit</h1>

          <div className="mt-4">
            <span>Gamify habits to make them fun, easy, and automatic!</span>
          </div>
          <div className="mt-10">
            <HomeBtnWrapper />
          </div>
        </div>

        <div className="relative bottom-16 mt-20 lg:mt-0 flex flex-col  w-full max-w-md">
          <div className="mb-5 ">
            <TaskCard />
          </div>
          <div>
            <GardenSlice />
          </div>
        </div>
      </div>
      <div className="flex items-end justify-center flex-1">
        <HomeFooter />
      </div>
    </div>
  );
}

// In my server component can I define a function and the pass it to a client component
