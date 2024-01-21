"use client";
import React from "react";
import { useState } from "react";
import DownArrow from "../svg/down_arr";
import { useTaskStore } from "@/app/store";

const GardenSlice = () => {
  const task = useTaskStore((state) => state.task);
  // const [plantIdx, setPlantIdx] = useState(plantEmojis.slice(0, 2));
  const CELL_HEIGHT = 4;
  const CELL_WIDTH = 4.375;

  let row = [];
  let selectedPlants = [...plantEmojis.slice(0, (task % 6) + 1)];

  for (let i = 0; i < 6; i++) {
    let val = selectedPlants[i] ?? null;
    let isHighlight = task % 6;
    row.push(
      <div
        key={i}
        className={`bg-secondary/25 border-2 border-x-1 border-l-0 border-dashed border-foreground/90 flex-1 ${
          i == 0 && "rounded-l-2xl border-l-2"
        } ${i == 5 && "rounded-r-2xl"} `}
      >
        {CellNode(CELL_WIDTH, CELL_HEIGHT, val, i == isHighlight)}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="relative mb-10">
        <span className="absolute left-20 top-0">
          <DownArrow
            style={{
              transform: "scaleX(-1) rotate(180deg)",
              scale: 0.75,
              stroke: "hsl(132,95%,40%)",
            }}
          />
        </span>
        <span className="text-md font-semibold text-primary text-sm relative left-36 top-2">
          To grow a garden!
        </span>
      </div>

      <div id="garden_row" className="flex">
        {row}
      </div>
    </div>
  );
};

export default GardenSlice;

const CellNode = (
  w: number,
  h: number,
  plantObj: {
    id: number;
    name: string;
    emoji: string;
  } | null,
  highlight: boolean
) => {
  return (
    <div
      //  minWidth: `${w}rem`
      style={{ minHeight: `${h}rem` }}
      className={`flex flex-1 justify-center items-center border-transparent rounded-l-2xl rounded-r-2xl border-l-2 ${
        highlight && "bg-background"
      }`}
    >
      <span className="text-3xl">{plantObj?.id ? plantObj.emoji : ""}</span>
    </div>
  );
};

const plantEmojis = [
  { id: 11, name: "blossom", emoji: "🌼" },
  { id: 12, name: "mushroom", emoji: "🍄" },
  { id: 1, name: "seedling", emoji: "🌱" },
  { id: 2, name: "herb", emoji: "🌿" },
  { id: 3, name: "fourLeafClover", emoji: "🍀" },
  { id: 4, name: "tree", emoji: "🌳" },
  { id: 5, name: "cactus", emoji: "🌵" },
  { id: 6, name: "tanabataTree", emoji: "🎋" },
  { id: 7, name: "fallenLeaf", emoji: "🍂" },
  { id: 8, name: "mapleLeaf", emoji: "🍁" },
  { id: 9, name: "hibiscus", emoji: "🌺" },
  { id: 10, name: "cherryBlossom", emoji: "🌸" },
];

// How to draw a grid?
// I have done it before
//
