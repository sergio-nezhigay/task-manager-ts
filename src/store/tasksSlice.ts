import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialTasks } from "./constants";
import { ITask } from "interfaces/ITask";

interface TasksState {
  tasks: ITask[];
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: initialTasks,
  } as TasksState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action: PayloadAction<ITask>) => {
      const { id, name, description, completed } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        const updatedTask = {
          ...state.tasks[taskIndex],
          name,
          description,
          completed,
        };
        state.tasks.splice(taskIndex, 1, updatedTask);
      }
    },
    toggleTaskStatus: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        const updatedTask = { ...state.tasks[taskIndex] };
        updatedTask.completed = !updatedTask.completed;
        state.tasks.splice(taskIndex, 1, updatedTask);
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTaskStatus } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
