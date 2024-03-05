import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialToDos } from 'data/constants';
import { IToDo, ToDosState } from 'types';

const tasksSlice = createSlice({
	name: 'tasks',
	initialState: {
		tasks: initialToDos,
	} as ToDosState,
	reducers: {
		addToDo: (state, action: PayloadAction<IToDo>) => {
			state.tasks.push(action.payload);
		},
		editToDo: (state, action: PayloadAction<IToDo>) => {
			const { id, recordText, completed } = action.payload;
			const taskIndex = state.tasks.findIndex((task) => task.id === id);
			if (taskIndex !== -1) {
				const updatedToDo = {
					...state.tasks[taskIndex],

					recordText,
					completed,
				};
				state.tasks.splice(taskIndex, 1, updatedToDo);
			}
		},
		toggleToDoStatus: (state, action: PayloadAction<string>) => {
			const taskId = action.payload;
			const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
			if (taskIndex !== -1) {
				const updatedToDo = { ...state.tasks[taskIndex] };
				updatedToDo.completed = !updatedToDo.completed;
				state.tasks.splice(taskIndex, 1, updatedToDo);
			}
		},
		deleteToDo: (state, action: PayloadAction<string>) => {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload);
		},
	},
});

export const { addToDo, editToDo, deleteToDo, toggleToDoStatus } =
	tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
