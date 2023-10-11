import { ITask } from "./commonTypes";

export type TaskStatus = "all" | "active" | "completed";

export const statusFilters: Record<TaskStatus, string> = Object.freeze({
  all: "all",
  active: "Active",
  completed: "Completed",
});

export const initialTasks: ITask[] = [
  {
    id: "1",
    name: "Word Play",
    description: "Create a new task with a title",
    completed: false,
  },
  {
    id: "2",
    name: "Timer Challenge",
    description: "Set a timer for 30 seconds",
    completed: false,
  },
  {
    id: "3",
    name: "Emoji Express",
    description: "Add an emoji",
    completed: true,
  },
];
