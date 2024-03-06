/* eslint-disable @typescript-eslint/no-unused-vars */
import { getFilters, getIds } from "@/api/rtkApi";
import { AllFilters } from "@/components/Filters";
import { ItemsList } from "@/components/ItemsList";
import { Pagination } from "@/components/Pagination";
import { usePagination } from "@/shared/hooks/usePagination";
import { Preloader } from "@/shared/ui/Preloader";
import { memo, useEffect } from "react";

const HomePage = memo(() => {
  const [_, { data }] = getFilters({
    fixedCacheKey: "filter",
  });

  const [getIdsFn, { isLoading, data: itemsIdsPaggination }] = getIds({});

  useEffect(() => {
    getIdsFn(null);
  }, []);

  const itemsForCurrentPage = usePagination(data || itemsIdsPaggination);

  return (
    <section>
      <AllFilters />

      {isLoading && <Preloader />}

      <ItemsList itemsIds={itemsForCurrentPage} />

      <Pagination />
    </section>
  );
});

export { HomePage };
