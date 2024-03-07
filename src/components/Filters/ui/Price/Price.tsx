import { getFilters } from "@/api/rtkApi";
import { getPrice } from "@/redux/filters/selectors";
import { filtersActions } from "@/redux/filters/slice/filtersSlice";
import { paginationActions } from "@/redux/pagination/slice/paginationSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { Input } from "@/shared/ui/Input";

const Price = () => {
  const price = useAppSelector(getPrice);
  const dispatch = useAppDispatch();

  const [getIdsSearchFn, { isError, error }] = getFilters({
    fixedCacheKey: "filter",
  });

  const debounseFn = useDebounce((value: number) => {
    getIdsSearchFn({
      filter: "price",
      value: value,
    });

    dispatch(paginationActions.setPage(1));
  }, 1000);

  const setPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(filtersActions.setPrice(+value));
    debounseFn(+value);
  };

  if (isError) {
    console.log("Err Search", error);

    debounseFn(price);
  }

  return (
    <Input
      value={price ?? 0}
      onChange={setPriceChange}
      active={"price"}
      label={"По цене (Строгое число)"}
    />
  );
};

export { Price };
