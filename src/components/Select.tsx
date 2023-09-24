import {
  DetailedHTMLProps,
  SelectHTMLAttributes,
  FormEventHandler,
} from "react";

interface Props
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  id: string;
  label: string;
  name: string;
  onChange?: FormEventHandler;
}

export default function Select(props: Props): JSX.Element {
  const { label, id, value, onChange, children, disabled, ...rest } = props;

  let className =
    "peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-indigo-500";
  if (disabled) className += " disabled py-1";

  return (
    <div className="relative">
      <select
        id={id}
        className={className}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      >
        {children}
      </select>
      <label
        htmlFor={id}
        className="absolute left-0 -top-3.5 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all duration-200 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
}
