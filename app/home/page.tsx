import { ModeToggle } from "@/components/darkModeToggleBtn/darkModeToggleBtn";
import HomeBar from "@/components/home-bar";
import TaskCard from "@/components/task-card";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <ModeToggle /> */}
      <HomeBar />

      <h1 className="text-5xl font-bold">Build habits</h1>
      <h1 className="text-5xl font-bold text-primary">you won't quit</h1>

      <TaskCard />
    </div>
  );
}
