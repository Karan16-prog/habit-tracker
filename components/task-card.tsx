"use client";

import React from "react";
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import DownArrow from "./svg/down_arr";
const TaskCard = () => {
  const [task, setTask] = useState(0);
  const [checked, setChecked] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);

  const handleTaskCheck = () => {
    if (isExecuting) {
      return;
    }
    setIsExecuting(true);
    setChecked(true);

    setTimeout(() => {
      let newTask = task + 1 < conciseHabitsArray.length ? task + 1 : 0;
      setTask(newTask);
      setChecked(false);
      setIsExecuting(false);
    }, 500);
    // setChecked(false);
  };
  return (
    <div className=" max-w-md">
      <div className="relative text-right mb-10">
        <span className="text-md text-sm relative right-16 top-6">
          Tick Habits...
        </span>
        <span className="absolute right-0 top-5">
          <DownArrow />
        </span>
      </div>
      <div
        id="parent-div"
        className={`bg-secondary/25 flex px-4 py-6 justify-between items-center rounded-2xl ${
          isExecuting ? "animate-fade-in" : ""
        }`}
      >
        <div className="font-bold text-xl flex items-center justify-center">
          {checked ? (
            <del>{conciseHabitsArray[task]}</del>
          ) : (
            conciseHabitsArray[task]
          )}
        </div>

        <Checkbox
          checked={checked}
          onCheckedChange={() => handleTaskCheck()}
          className="h-8 w-8 dark:text-secondary-foreground"
        />
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
