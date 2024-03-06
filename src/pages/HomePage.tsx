import { getIdsSearch } from "@/api/rtkApi";
import { AllFilters } from "@/components/Filters";
import { ItemsList } from "@/components/ItemsList";
import { Pagination } from "@/components/Pagination";
// import { getActiveBrand } from "@/redux/filters/selectors";
import { selectStartIndex } from "@/redux/pagination/selectors";
import { paginationActions } from "@/redux/pagination/slice/paginationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { memo, useEffect, useMemo } from "react";

const HomePage = memo(() => {
  const dispatch = useAppDispatch();

  const startIndex = useAppSelector(selectStartIndex);
  // const activeBrand = useAppSelector(getActiveBrand);
  // const endIndex = useAppSelector(selectEndIndex);

  const [getIdsFn, { isLoading, data: itemsIdsPaggination, error }] =
    getIdsSearch({
      fixedCacheKey: "filter",
    });

  useEffect(() => {
    getIdsFn("");
  }, [getIdsFn]);

  useEffect(() => {
    if (itemsIdsPaggination?.result) {
      dispatch(
        paginationActions.setTotalItems(itemsIdsPaggination.result.length)
      );
    }
  }, [itemsIdsPaggination, dispatch]);

  // const itemsForCurrentPage = useMemo(() => {
  //   return itemsIdsPaggination?.result.slice(startIndex, endIndex);
  // }, [itemsIdsPaggination, startIndex, endIndex]);

  const itemsForCurrentPage = useMemo(() => {
    const uniqueItems = new Set();
    let index = startIndex;

    while (
      uniqueItems.size < 50 &&
      itemsIdsPaggination?.result &&
      index < itemsIdsPaggination.result.length
    ) {
      uniqueItems.add(itemsIdsPaggination.result[index]);
      index++;
    }

    return Array.from(uniqueItems) as string[];
  }, [itemsIdsPaggination, startIndex]);

  if (error) {
    return <div>Что-то не так</div>;
  }

  return (
    <section>
      {/* <FilterForm /> */}
      <AllFilters />

      {isLoading && <div>load...</div>}
      <ItemsList itemsIds={itemsForCurrentPage} />

      <Pagination />
    </section>
  );
});

export { HomePage };
