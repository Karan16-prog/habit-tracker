"use client";
import React from "react";
import { useState } from "react";

const GardenSlice = () => {
  const [plantIdx, setPlantIdx] = useState(plantEmojis.slice(0, 2));
  const CELL_WIDTH = 70;
  const CELL_HEIGHT = 64;
  let row = [];

  for (let i = 0; i < 6; i++) {
    let val = plantIdx[i] ?? null;
    let isHighlight = plantIdx.length !== 6 ? plantIdx.length : -1;
    row.push(
      <div
        key={i}
        className={`bg-secondary/25 border-2 border-x-1 border-l-0 border-dashed border-foreground/90 ${
          i == 0 && "rounded-l-2xl border-l-2"
        } ${i == 5 && "rounded-r-2xl"} `}
      >
        {CellNode(CELL_WIDTH, CELL_HEIGHT, val, i == isHighlight)}
      </div>
    );
  }

  return (
    <div id="garden_row" className="inline-flex">
      {row}
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
      style={{ width: w, height: h }}
      className={`flex justify-center items-center ${
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
