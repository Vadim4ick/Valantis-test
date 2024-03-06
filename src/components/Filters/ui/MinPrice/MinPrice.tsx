import { getMinPrice } from "@/redux/filters/selectors";
import { filtersActions } from "@/redux/filters/slice/filtersSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

const MinPrice = () => {
  const minPrice = useAppSelector(getMinPrice);
  const dispatch = useAppDispatch();

  return (
    <input
      type="number"
      value={minPrice ?? 0}
      onChange={(e) => dispatch(filtersActions.setMinPrice(+e.target.value))}
    />
  );
};

export { MinPrice };
