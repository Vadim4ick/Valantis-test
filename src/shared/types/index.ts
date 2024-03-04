import { Pagination } from "@/redux/pagination/type";

export interface Item {
  brand: string | null;
  id: string;
  price: number;
  product: string;
}

export interface StateSchema {
  pagination: Pagination;
}
