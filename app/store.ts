import { create } from "zustand";

type TaskStore = {
  task: number;
  increment: () => void;
  decrement: () => void;
  update: (arg0: number) => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
  task: 1,
  increment: () => {
    set((state) => ({ task: state.task + 1 }));
  },
  decrement: () => {
    set((state) => ({
      task: state.task - 1,
    }));
  },
  update: (arg0) => {
    set(() => ({ task: arg0 }));
  },
}));
