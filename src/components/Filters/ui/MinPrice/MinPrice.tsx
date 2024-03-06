import { getMinPrice } from "@/redux/filters/selectors";
import { filtersActions } from "@/redux/filters/slice/filtersSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Input } from "@/shared/ui/Input";
import { useCallback } from "react";

const MinPrice = () => {
  const minPrice = useAppSelector(getMinPrice);
  const dispatch = useAppDispatch();

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filtersActions.setMinPrice(+e.target.value));
  }, []);

  return (
    <Input
      value={minPrice ?? 0}
      onChange={onChange}
      active={"price"}
      label={"По цене (Строгое число)"}
    />
  );
};

export { MinPrice };
