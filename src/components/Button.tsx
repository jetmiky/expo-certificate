import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  theme?: "indigo" | "green" | "rose";
  isLoading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export default function Button(props: Props): JSX.Element {
  const {
    theme = "indigo",
    isLoading = false,
    disabled = false,
    children,
    onClick,
    ...rest
  } = props;

  let classes: string;

  switch (theme) {
    case "indigo":
      classes =
        "bg-indigo-500 shadow-indigo-200 hover:bg-indigo-600 focus:bg-indigo-600 focus:ring-indigo-600 disabled:bg-indigo-400/80";
      break;
    case "green":
      classes =
        "bg-green-500 shadow-green-200 hover:bg-green-600 focus:bg-green-600 focus:ring-green-600 disabled:bg-green-400/80";
      break;
    case "rose":
      classes =
        "bg-rose-500 shadow-rose-200 hover:bg-rose-600 focus:bg-rose-600 focus:ring-rose-600 disabled:bg-rose-400/80";
      break;
    default:
      classes = "";
  }

  return (
    <button
      className={`${classes} px-4 py-2 outline-none rounded text-white shadow-lg font-medium active:shadow-none active:scale-95 focus:ring-2 focus:ring-offset-2 disabled:shadow-none disabled:cursor-not-allowed transition-all transition-ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0`}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <>
          <svg
            role="status"
            className="inline h-5 w-5 mr-3 animate-spin text-gray-200 dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          Processing ...
        </>
      ) : (
        children
      )}
    </button>
  );
}
