import { createSelector } from 'reselect';

import { RootState } from './store';
import { IToDo } from 'types';
import { statusFilters } from 'data/constants';

export const selectToDos = (state: RootState): IToDo[] => state.tasks.tasks;

export const selectStatusFilter = (state: RootState): string =>
	state.filters.status;

export const selectVisibleToDos = createSelector(
	[selectToDos, selectStatusFilter],
	(tasks, statusFilter) => {
		switch (statusFilter) {
			case statusFilters.active: {
				return tasks.filter((task) => !task.completed);
			}
			case statusFilters.completed: {
				return tasks.filter((task) => task.completed);
			}
			default: {
				return tasks;
			}
		}
	}
);

export const selectCompletedToDosQty = createSelector(
	[selectToDos],
	(tasks) => {
		return tasks.filter((task) => task.completed).length;
	}
);

export const selectUncompletedToDosQty = createSelector(
	[selectToDos],
	(tasks) => {
		return tasks.filter((task) => !task.completed).length;
	}
);
