import { ChangeEventHandler } from "react";

interface Props {
  id: string;
  label: string;
  name: string;
  type?: string;
  value?: any;
  onChange?: ChangeEventHandler;
  required?: boolean;
}

export default function Input({
  type = "text",
  label,
  id,
  name,
  required = false,
  value = "",
  onChange,
}: Props): JSX.Element {
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        placeholder={label}
        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-indigo-500"
        value={value}
        required={required}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="absolute left-0 -top-3.5 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all duration-200 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
}
