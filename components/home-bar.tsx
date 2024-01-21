import React from "react";
import { Button } from "@/components/ui/button";
import LoginButton from "./login-button";

const HomeBar = () => {
  return (
    <div className="bg-secondary/25 flex items-center justify-between px-2 py-3 rounded-2xl w-full">
      <div className="text-4xl">🪴</div>
      <div className="text-xl font-bold">Habit Tracker</div>
      <LoginButton />
    </div>
  );
};

export default HomeBar;
