import { StateSchema } from "@/shared/types";

export const getSearchText = (state: StateSchema) =>
  state.filters.searchText ?? "";
export const getBrands = (state: StateSchema) => state.filters.allBrands;
export const getActiveFilter = (state: StateSchema) =>
  state.filters.activeFilter;
export const getMinPrice = (state: StateSchema) => state.filters.minPrice ?? 0;
export const getActiveBrand = (state: StateSchema) =>
  state.filters.activeBrand ?? "";
