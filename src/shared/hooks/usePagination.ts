import { selectStartIndex } from "@/redux/pagination/selectors";
import { paginationActions } from "@/redux/pagination/slice/paginationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useMemo } from "react";

export const usePagination = (data: { result: string[] } | undefined) => {
  const dispatch = useAppDispatch();
  const startIndex = useAppSelector(selectStartIndex);

  useEffect(() => {
    if (data?.result) {
      dispatch(paginationActions.setTotalItems(data.result.length));
    }
  }, [data, dispatch]);

  const itemsForCurrentPage = useMemo(() => {
    const uniqueItems = new Set();
    let index = startIndex;

    while (
      uniqueItems.size < 50 &&
      data?.result &&
      index < data.result.length
    ) {
      uniqueItems.add(data.result[index]);
      index++;
    }

    return Array.from(uniqueItems) as string[];
  }, [data, startIndex]);

  return itemsForCurrentPage;
};
