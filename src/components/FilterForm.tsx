import { useFiltred } from "@/services";
import { useState } from "react";

const FilterForm = () => {
  const [value, setValue] = useState("");

  const { data } = useFiltred(value);

  console.log(data);
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
