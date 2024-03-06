import { getIds } from "@/api/rtkApi";
import {
  getActiveBrand,
  getBrands,
  getSearchText,
} from "@/redux/filters/selectors";
import { fetchAllBrands } from "@/redux/filters/services/fetchAllBrands";
import { filtersActions } from "@/redux/filters/slice/filtersSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { memo, useEffect } from "react";

const FilterForm = memo(() => {
  const searchText = useAppSelector(getSearchText);
  const brands = useAppSelector(getBrands);
  const activeBrand = useAppSelector(getActiveBrand);

  const dispatch = useAppDispatch();

  const [getIdsFn] = getIds({
    fixedCacheKey: "filter",
  });

  const debounseFn = useDebounce((value) => {
    getIdsFn({
      filterString: value,
      filterBrand: activeBrand,
    });
  }, 1000);

  useEffect(() => {
    dispatch(fetchAllBrands());
  }, [dispatch]);

  const setSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(filtersActions.setSearchText(value));
    debounseFn(value);
  };

  return (
    <div className="flex gap-9">
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e);
        }}
      />

      {brands.length && (
        <select
          className="form w-[250px] h-[35px]"
          onChange={(e) => {
            dispatch(filtersActions.setActiveBrand(e.target.value));
          }}
          value={activeBrand}
        >
          <option value="">Все</option>

          {brands.map((el) => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
      )}
    </div>
  );
});

export { FilterForm };
