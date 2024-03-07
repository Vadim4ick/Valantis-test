/* eslint-disable @typescript-eslint/no-unused-vars */
import { getFilters, getIds } from "@/api/rtkApi";
import { AllFilters } from "@/components/Filters";
import { ItemsList } from "@/components/ItemsList";
import { Pagination } from "@/components/Pagination";
import { getActiveBrand, getActiveFilter } from "@/redux/filters/selectors";
import { useAppSelector } from "@/redux/store";
import { usePagination } from "@/shared/hooks/usePagination";
import { Preloader } from "@/shared/ui/Preloader";
import { Skeleton } from "@/shared/ui/Skeleton";
import { memo, useEffect } from "react";

const HomePage = memo(() => {
  const [_, { data, isLoading: load }] = getFilters({
    fixedCacheKey: "filter",
  });

  const activeBrand = useAppSelector(getActiveBrand);
  const activeFilter = useAppSelector(getActiveFilter);

  const [getIdsFn, { isLoading, data: itemsIdsPaggination }] = getIds({
    fixedCacheKey: "getIds",
  });

  useEffect(() => {
    getIdsFn(null);
  }, []);

  const itemsForCurrentPage = usePagination(
    (activeBrand !== "" || activeFilter !== "brand") && data
      ? data
      : itemsIdsPaggination
  );

  return (
    <section>
      <AllFilters className="mb-4" />

      {isLoading && <Preloader />}

      <ItemsList itemsIds={itemsForCurrentPage} />

      {isLoading || load ? <Skeleton /> : <Pagination />}
    </section>
  );
});

export { HomePage };
