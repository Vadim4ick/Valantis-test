import { memo } from "react";
import { SearchFilter } from "../SearchFilter/SearchFilter";
import { BrandFilter } from "../BrandFilter/BrandFilter";
import { MinPrice } from "../MinPrice/MinPrice";

const AllFilters = memo(() => {
  return (
    <div className="flex gap-9">
      <SearchFilter />

      <BrandFilter />

      <MinPrice />
    </div>
  );
});

export { AllFilters };
