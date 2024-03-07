/* eslint-disable @typescript-eslint/no-unused-vars */
import { getFilters, getIds } from "@/api/rtkApi";
import { ItemsList } from "@/components/ItemsList";
import { Pagination } from "@/components/Pagination";
import {
  getActiveBrand,
  getActiveFilter,
  getPrice,
} from "@/redux/filters/selectors";
import { useAppSelector } from "@/redux/store";
import { usePagination } from "@/shared/hooks/usePagination";
import { Preloader } from "@/shared/ui/Preloader";
import { Skeleton } from "@/shared/ui/Skeleton";
import { Typography } from "@/shared/ui/Typography";
import { memo, useEffect } from "react";

const HomePage = memo(() => {
  const [_, { data, isLoading: load }] = getFilters({
    fixedCacheKey: "filter",
  });

  const activeBrand = useAppSelector(getActiveBrand);
  const activeFilter = useAppSelector(getActiveFilter);
  const price = useAppSelector(getPrice);

  const [getIdsFn, { isLoading, data: itemsIdsPaggination }] = getIds({
    fixedCacheKey: "getIds",
  });

  useEffect(() => {
    getIdsFn(null);
  }, []);

  const itemsForCurrentPage = usePagination(
    (activeBrand !== "" || activeFilter !== "brand") &&
      (activeFilter !== "price" || price !== null) &&
      data
      ? data
      : itemsIdsPaggination
  );

  if (isLoading) {
    return <Preloader />;
  }

  if (isLoading || load) {
    return <Skeleton />;
  }
  return (
    <>
      {itemsForCurrentPage.length > 0 ? (
        <ItemsList itemsIds={itemsForCurrentPage} />
      ) : (
        <Typography className="mx-auto table" tag="h3" variant="title-2">
          Ничего не найдено.... Измените фильтры
        </Typography>
      )}

      <Pagination />
    </>
  );
});

export { HomePage };
