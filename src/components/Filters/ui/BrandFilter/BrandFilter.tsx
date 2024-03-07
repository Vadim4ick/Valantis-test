import { getFilters, getIds } from "@/api/rtkApi";
import {
  getActiveBrand,
  getActiveFilter,
  getBrands,
} from "@/redux/filters/selectors";
import { fetchAllBrands } from "@/redux/filters/services/fetchAllBrands";
import { filtersActions } from "@/redux/filters/slice/filtersSlice";
import { paginationActions } from "@/redux/pagination/slice/paginationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Select, SelectOption } from "@/shared/ui/Select";
import { useCallback, useEffect, useMemo } from "react";

const BrandFilter = () => {
  const brands = useAppSelector(getBrands) as string[];
  const activeBrand = useAppSelector(getActiveBrand);
  const activeFilter = useAppSelector(getActiveFilter);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllBrands());
  }, [dispatch]);

  const [getIdsBrandFn, { isError, error }] = getFilters({
    fixedCacheKey: "filter",
  });

  const [getIdsFn] = getIds({
    fixedCacheKey: "getIds",
  });

  useEffect(() => {
    if (activeBrand !== "") {
      getIdsBrandFn({
        filter: "brand",
        value: activeBrand,
      });
      dispatch(paginationActions.setPage(1));
    } else {
      getIdsFn(null);
      dispatch(paginationActions.setPage(1));
    }
  }, [activeBrand, dispatch, getIdsBrandFn, getIdsFn]);

  if (isError) {
    console.log("Err brand", error);

    getIdsBrandFn({
      filter: "brand",
      value: activeBrand,
    });
  }

  const onChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filtersActions.setActiveBrand(e.target.value));
  }, []);

  const options = useMemo(() => {
    const arr = brands.map((el) => {
      return {
        value: el,
        text: el,
      };
    });

    const newArr = [
      {
        value: "",
        text: "Все",
      },
      ...arr,
    ] as SelectOption[];

    return newArr;
  }, [brands]);

  return (
    <Select
      label="По бренду"
      disabled={activeFilter !== "brand"}
      onChange={onChange}
      value={activeBrand}
      options={options}
    />
  );
};

export { BrandFilter };
