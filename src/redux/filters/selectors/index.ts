import { StateSchema } from "@/shared/types";

export const getSearchText = (state: StateSchema) =>
  state.filters.searchText ?? "";
export const getBrands = (state: StateSchema) => state.filters.allBrands;
export const getActiveFilter = (state: StateSchema) =>
  state.filters.activeFilter;
export const getPrice = (state: StateSchema) => state.filters.price ?? 0;
export const getActiveBrand = (state: StateSchema) =>
  state.filters.activeBrand ?? "";
