import { Filter } from "@/shared/types";

export interface Filters {
  searchText: string | null;
  allBrands: string[];
  activeBrand: string | null;
  price: number | null;

  activeFilter: Filter;
}
