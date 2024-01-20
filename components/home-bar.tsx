import React from "react";
import { Button } from "@/components/ui/button";
import LoginButton from "./login-button";

const HomeBar = () => {
  return (
    <div className="w-full bg-secondary/25 flex items-center justify-between px-2 py-3 max-w-xl rounded-2xl">
      <div className="text-4xl">🪴</div>
      <div className="text-xl font-bold">Habit Tracker</div>
      <LoginButton />
    </div>
  );
};

export default HomeBar;
