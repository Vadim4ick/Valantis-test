import { getFilters } from "@/api/rtkApi";
import { getSearchText } from "@/redux/filters/selectors";
import { filtersActions } from "@/redux/filters/slice/filtersSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useDebounce } from "@/shared/hooks/useDebounce";

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

  return (
    <input
      type="text"
      value={searchText}
      onChange={(e) => {
        setSearchText(e);
      }}
    />
  );
};

export { SearchFilter };
