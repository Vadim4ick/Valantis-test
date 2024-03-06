import { memo, useCallback } from "react";
import { SearchFilter } from "../SearchFilter/SearchFilter";
import { BrandFilter } from "../BrandFilter/BrandFilter";
import { MinPrice } from "../MinPrice/MinPrice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getActiveFilter } from "@/redux/filters/selectors";
import { filtersActions } from "@/redux/filters/slice/filtersSlice";
import { Filter } from "@/shared/types";
import clsx from "clsx";
import { Typography } from "@/shared/ui/Typography";
import { Select } from "@/shared/ui/Select";
import { allFiltersOption } from "@/shared/const/const";

const AllFilters = memo(({ className }: { className?: string }) => {
  const activeFilter = useAppSelector(getActiveFilter);
  const dispatch = useAppDispatch();

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(filtersActions.removeFilters());
      dispatch(filtersActions.changeActiveFilter(e.target.value as Filter));
    },
    [dispatch]
  );

  return (
    <Typography
      className={clsx("flex flex-col gap-5 justify-center items-center", {}, [
        className,
      ])}
    >
      <Typography className="flex flex-col items-center gap-3">
        <Typography tag="h3" variant="title-3">
          Выберите один из фильтров который будет для вас активен
        </Typography>

        <Select
          onChange={onChange}
          options={allFiltersOption}
          value={activeFilter}
        />
      </Typography>

      <Typography className="flex gap-9">
        <SearchFilter />

        <BrandFilter />

        <MinPrice />
      </Typography>
    </Typography>
  );
});

export { AllFilters };
