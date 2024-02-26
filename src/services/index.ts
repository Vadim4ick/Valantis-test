import { KEYQUERY } from "@/shared/const/keyQuery";
import { useQuery } from "@tanstack/react-query";
import { ItemsService } from "./query";

export const useItemIds = () => {
  return useQuery({
    queryKey: [KEYQUERY.GET_IDS],
    queryFn: ItemsService.getIds,
    refetchOnWindowFocus: false,
  });
};

export const useItems = (ids: string[]) => {
  return useQuery({
    queryKey: [KEYQUERY.GET_ITEMS],
    queryFn: () => ItemsService.getItems(ids),
    refetchOnWindowFocus: false,
  });
};

export const useFiltred = (filter: string) => {
  return useQuery({
    queryKey: [KEYQUERY.GET_FILTER_ITEMS, filter],
    queryFn: () => ItemsService.filteredItems(filter),
    refetchOnWindowFocus: false,
  });
};
