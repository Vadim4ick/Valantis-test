// import { useFiltred } from "@/services";
import { useState } from "react";

const FilterForm = () => {
  const [value, setValue] = useState("");

  // const { data: itemsIds, error, isLoading } = useFiltred(value);

  // if (isLoading) {
  //   return <div>load...</div>;
  // }

  // if (error) {
  //   return <div>err</div>;
  // }

  // if (!itemsIds?.result) {
  //   return <div>Что-то пошло не так</div>;
  // }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export { FilterForm };
