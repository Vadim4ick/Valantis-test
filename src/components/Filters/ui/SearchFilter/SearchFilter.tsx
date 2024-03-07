import { getFilters } from "@/api/rtkApi";
import { getSearchText } from "@/redux/filters/selectors";
import { filtersActions } from "@/redux/filters/slice/filtersSlice";
import { paginationActions } from "@/redux/pagination/slice/paginationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { Input } from "@/shared/ui/Input";
import React, { useCallback } from "react";

const SearchFilter = () => {
  const searchText = useAppSelector(getSearchText);
  const dispatch = useAppDispatch();

  const [getIdsSearchFn, { isError, error }] = getFilters({
    fixedCacheKey: "filter",
  });

  const debounseFn = useDebounce((value) => {
    getIdsSearchFn({
      filter: "search",
      value: value,
    });

    dispatch(paginationActions.setPage(1));
  }, 1000);

  const setSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(filtersActions.setSearchText(value));
    debounseFn(value);
  };

  // if (isLoading) {
  //   return <Skeleton width={177} height={35} />;
  // }

  if (isError) {
    console.log("Err Search", error);

    debounseFn(searchText);
  }

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e);
  }, []);

  return (
    <>
      <Input
        value={searchText}
        onChange={onChange}
        active={"search"}
        label={"По тексту"}
      />
    </>
  );
};

export { SearchFilter };
