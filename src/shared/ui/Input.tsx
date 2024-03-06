/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { Filter } from "../types";
import { useAppSelector } from "@/redux/store";
import { getActiveFilter } from "@/redux/filters/selectors";

interface InputProps {
  className?: string;
  label?: string;
  active?: Filter;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const { onChange, value, active, className, label } = props;
  const activeFilter = useAppSelector(getActiveFilter);

  const input = (
    <input
      type="text"
      disabled={activeFilter !== active}
      value={value}
      onChange={onChange}
    />
  );

  if (label) {
    return (
      <label
        className={clsx(
          "flex flex-col gap-2",
          {
            "opacity-40 cursor-not-allowed": activeFilter !== active,
          },
          [className]
        )}
      >
        <span>{label}</span>

        <input
          type="text"
          disabled={activeFilter !== active}
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }

  return input;
};

export { Input };
