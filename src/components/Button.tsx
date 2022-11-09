import { ReactNode } from "react";

interface Props {
  color?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export default function Button({
  color = "indigo",
  disabled = false,
  children,
  onClick,
}: Props): JSX.Element {
  return (
    <button
      className={`px-4 py-2 bg-${color}-500 outline-none rounded text-white shadow-${color}-200 shadow-lg font-medium active:shadow-none active:scale-95 hover:bg-${color}-600 focus:bg-${color}-600 focus:ring-2 focus:ring-${color}-600 focus:ring-offset-2 disabled:bg-${color}-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
