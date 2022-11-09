import { ReactNode } from "react";

interface Props {
  type?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export default function Button({
  type = "primary",
  disabled = false,
  children,
  onClick,
}: Props): JSX.Element {
  const classes =
    type === "primary"
      ? "bg-indigo-500 shadow-indigo-200 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-indigo-600 disabled:bg-indigo-400/80"
      : type === "secondary"
      ? "bg-green-500 shadow-green-200 hover:bg-green-600 focus:bg-green-600 focus:ring-green-600 disabled:bg-green-400/80"
      : "";

  return (
    <button
      className={`${classes} px-4 py-2 outline-none rounded text-white shadow-lg font-medium active:shadow-none active:scale-95  focus:ring-2 focus:ring-offset-2 disabled:shadow-none disabled:cursor-not-allowed transition-ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
