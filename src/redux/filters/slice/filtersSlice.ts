import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Filters } from "../type";

const initialState: Filters = {
  searchText: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export const filtersActions = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
