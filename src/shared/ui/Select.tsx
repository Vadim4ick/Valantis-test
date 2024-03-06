import clsx from "clsx";

interface SelectProps {
  className?: string;
  label?: string;
  disabled?: boolean;
  options: SelectOption[];
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export type SelectOption = {
  value: string;
  text: string;
};

const Select = (props: SelectProps) => {
  const { onChange, value, className, label, options, disabled } = props;

  const select = (
    <select
      className={clsx("form w-[250px] h-[35px]", {}, [className])}
      onChange={onChange}
      value={value}
      disabled={disabled}
    >
      {options.map((el) => {
        return (
          <option key={el.value} value={el.value}>
            {el.text}
          </option>
        );
      })}
    </select>
  );

  if (label) {
    return (
      <label
        className={clsx("flex flex-col gap-2", {
          "opacity-40 cursor-not-allowed": disabled,
        })}
      >
        <span>{label}</span>

        {select}
      </label>
    );
  }

  return select;
};

export { Select };
