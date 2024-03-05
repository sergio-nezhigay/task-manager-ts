import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { statusFilters } from 'data/constants';
import { FiltersState } from 'types';

const filtersInitialState: FiltersState = {
	status: statusFilters.active,
};

const filtersSlice = createSlice({
	name: 'filters',
	initialState: filtersInitialState,
	reducers: {
		setStatusFilter: (state, action: PayloadAction<string>) => {
			state.status = action.payload;
		},
	},
});

export const filtersReducer = filtersSlice.reducer;

export const { setStatusFilter } = filtersSlice.actions;

export type FiltersAction = typeof filtersSlice.actions.setStatusFilter;
