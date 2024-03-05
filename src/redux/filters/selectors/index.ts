import { StateSchema } from "@/shared/types";

export const getSearchText = (state: StateSchema) => state.filters.searchText;
