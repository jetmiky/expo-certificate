import { ReactNode } from "react";

interface Props {
  color?: string;
  disabled?: boolean;
  children: ReactNode;
}

export default function Button({
  disabled = false,
  children,
}: Props): JSX.Element {
  return (
    <button
      className="px-4 py-2 bg-indigo-500 outline-none rounded text-white shadow-indigo-200 shadow-lg font-medium active:shadow-none active:scale-95 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:bg-indigo-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
