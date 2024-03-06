// import { getIdsBrand } from "@/api/rtkApi";
import { getActiveBrand, getBrands } from "@/redux/filters/selectors";
import { fetchAllBrands } from "@/redux/filters/services/fetchAllBrands";
import { filtersActions } from "@/redux/filters/slice/filtersSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect } from "react";

const BrandFilter = () => {
  const brands = useAppSelector(getBrands);
  const activeBrand = useAppSelector(getActiveBrand);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllBrands());
  }, [dispatch]);

  // const [getIdsBrandFn] = getIdsBrand({
  //   fixedCacheKey: "filter",
  //   selectFromResult: ({ data }) => {
  //     console.log("res", data);

  //     return data ?? {};
  //   },
  // });

  // useEffect(() => {
  //   if (activeBrand !== "") {
  //     getIdsBrandFn(activeBrand);
  //   }
  // }, [activeBrand, dispatch, getIdsBrandFn]);

  return (
    <>
      {brands.length !== 0 && (
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
    </>
  );
};

export { BrandFilter };
