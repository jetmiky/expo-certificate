import { ReactNode } from "react";

interface Props {
  type?: "primary" | "secondary";
  color?: string;
  children: ReactNode;
}

export default function Alert({
  type = "primary",
  children,
}: Props): JSX.Element {
  const classes =
    type === "primary"
      ? "bg-indigo-100 text-indigo-700"
      : type === "secondary"
      ? "bg-red-100 text-red-700"
      : "";

  return (
    <div className={`${classes} flex rounded-lg p-4 mb-4 text-sm`}>
      <div>{children}</div>
    </div>
  );
}
