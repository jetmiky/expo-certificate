import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  FormEventHandler,
} from "react";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string;
  label: string;
  name: string;
  help?: string;
  onChange?: FormEventHandler;
}

export default function Input(props: Props): JSX.Element {
  const {
    type = "text",
    label,
    id,
    value,
    onChange,
    disabled,
    help,
    ...rest
  } = props;

  if (type === "file") {
    return (
      <div>
        <label className="block mb-1" htmlFor={id}>
          {label}
        </label>
        <input
          className="block w-full text-gray-700 bg-gray-100 border border-solid border-gray-300 rounded-md transition focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none cursor-pointer"
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </div>
    );
  }

  let className =
    "peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-indigo-500";
  if (disabled) className += " disabled py-1";

  return (
    <div className="relative">
      <input
        id={id}
        placeholder={label}
        className={className}
        value={value}
        onChange={onChange}
        type={type}
        disabled={disabled}
        {...rest}
      />
      <label
        htmlFor={id}
        className="absolute left-0 -top-3.5 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all duration-200 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
      {help ? <small className="text-xs">{help}</small> : null}
    </div>
  );
}
