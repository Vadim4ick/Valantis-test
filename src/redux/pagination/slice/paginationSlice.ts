import { createSlice } from "@reduxjs/toolkit";
import { Pagination } from "../type";

const initialState: Pagination = {
  limit: 50,
  page: 1,
  totalItems: 0,
  totalPages: 0,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setTotalItems: (state, action) => {
      state.totalItems = action.payload;
      state.totalPages = Math.ceil(state.totalItems / state.limit);
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const paginationActions = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
