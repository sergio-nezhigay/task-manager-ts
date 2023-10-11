import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

interface FiltersState {
  status: string;
}

const filtersInitialState: FiltersState = {
  status: statusFilters.completed,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setStatusFilter } = filtersSlice.actions;
