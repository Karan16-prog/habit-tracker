"use client";

import { useTaskStore } from "@/app/store";
import { useState, useRef } from "react";
import DownArrow from "./svg/down_arr";
import { Checkbox } from "./ui/checkbox";
import confetti from "canvas-confetti";

const TaskCard = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const task = useTaskStore((state) => state.task);
  const update = useTaskStore((state) => state.update);
  const [checked, setChecked] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);

  const handleTaskCheck = () => {
    if (isExecuting) {
      return;
    }
    setIsExecuting(true);
    setChecked(true);

    setTimeout(() => {
      let newTask = task + 1;
      update(newTask);
      setChecked(false);
      setIsExecuting(false);
    }, 500);
    // setChecked(false);
  };

  const triggerConfetti = () => {
    const targetElement = targetRef.current;
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();

      console.log(rect.left + rect.width / 2, rect.top + rect.height / 2);
      confetti({
        particleCount: 30,
        spread: 40,
        angle: 125,
        origin: {
          x: (rect.right - window.scrollX) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        },
        // other confetti options...
      });
    }
  };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  console.log(task);
  return (
    <div>
      <div className="relative text-right mb-10">
        <div
          className={`text-md font-semibold text-sm relative right-16 top-6 inline-block ${
            task == 1 && "animate-word-rotate"
          }`}
        >
          Tick Habits...
        </div>
        <span className="absolute right-0 top-5">
          <DownArrow style={{ transform: "rotate(180deg)", scale: 0.75 }} />
        </span>
      </div>
      <div
        id="parent-div"
        ref={targetRef}
        className={`bg-secondary/25 bg-red-200 flex px-4 py-6 justify-between items-center rounded-2xl ${
          isExecuting ? "animate-fade-in" : ""
        }`}
      >
        <div className="font-bold text-xl flex items-center justify-center">
          {checked ? (
            <del>{conciseHabitsArray[task % 6]}</del>
          ) : (
            conciseHabitsArray[task % 6]
          )}
        </div>
        <Checkbox
          checked={checked}
          onCheckedChange={() => {
            handleTaskCheck();

            triggerConfetti();
          }}
          className="h-8 w-8 dark:text-secondary-foreground"
        />

        {/* {isExecuting ? <ConfettiComponent /> : <ConfettiComponent />} */}
      </div>
    </div>
  );
};

export default TaskCard;

const conciseHabitsArray = [
  "Hydrate 💧",
  "Walk 10 min 🚶‍♂️",
  "Meditate 🧘‍♀️",
  "Eat veggies 🥗",
  "Gratitude journal 📔",
  "Read 15 min 📚",
  "Stretch break 💪",
  "Positive message 💌",
  "No sugary snacks 🍏",
  "Deep breathing ⏸️",
  "Plan tasks 📅",
  "8 hours sleep 😴",
  "Limit social media 📵",
  "Learn something new 🧠",
  "Organize space 🧹",
];
