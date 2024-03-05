import { getIds } from "@/api/rtkApi";
import { getSearchText } from "@/redux/filters/selectors";
import { filtersActions } from "@/redux/filters/slice/filtersSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { memo } from "react";

const FilterForm = memo(() => {
  const searchText = useAppSelector(getSearchText);
  const dispatch = useAppDispatch();

  const [getIdsFn] = getIds({
    fixedCacheKey: "filter",
  });

  const debounseFn = useDebounce((value) => {
    getIdsFn(value);
  }, 1000);

  const setSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(filtersActions.setSearchText(value));
    debounseFn(value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e);
        }}
      />
    </div>
  );
});

export { FilterForm };
