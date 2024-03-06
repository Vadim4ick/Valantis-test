import { Filter } from "@/shared/types";

export interface Filters {
  searchText: string | null;
  allBrands: string[];
  activeBrand: string | null;
  minPrice: number | null;

  activeFilter: Filter;
}
