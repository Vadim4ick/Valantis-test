import { StateSchema } from "@/shared/types";
import { createSelector } from "@reduxjs/toolkit";

export const selectPagination = (state: StateSchema) => state.pagination;
export const selectPage = (state: StateSchema) => state.pagination.page;
export const selectLimit = (state: StateSchema) => state.pagination.limit;
export const selectTotalItems = (state: StateSchema) =>
  state.pagination.totalItems;

// Вычисляемые селекторы
export const selectStartIndex = createSelector(
  [selectPage, selectLimit],
  (page, limit) => (page - 1) * limit
);
export const selectEndIndex = createSelector(
  [selectStartIndex, selectLimit],
  (startIndex, limit) => startIndex + limit
);
export const selectTotalPages = createSelector(
  [selectTotalItems, selectLimit],
  (totalItems, limit) => Math.ceil(totalItems / limit)
);
