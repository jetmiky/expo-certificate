import { ReactNode } from "react";

interface Props {
  color?: string;
  children: ReactNode;
}

export default function Alert({
  color = "indigo",
  children,
}: Props): JSX.Element {
  return (
    <div
      className={`flex bg-${color}-100 rounded-lg p-4 mb-4 text-sm text-${color}-700`}
    >
      <div>{children}</div>
    </div>
  );
}
