import { ITask } from "types";

export type TaskStatus = "all" | "active" | "completed";

export const statusFilters: Record<TaskStatus, string> = Object.freeze({
  all: "all",
  active: "Active",
  completed: "Completed",
});

export const TASK_MAX_LENGTH = 15;

export const initialTasks: ITask[] = [
  {
    id: "1",
    recordText: "Create a task",
    completed: false,
  },
  {
    id: "2",
    recordText: "Set a timer",
    completed: false,
  },
  {
    id: "3",
    recordText: "Add an emoji",
    completed: true,
  },
];
