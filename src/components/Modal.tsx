import { ReactNode } from "react";

// Components
import Button from "./Button";

interface Props {
  onToggle: Function;
  onCallback?: Function;
  title: string;
  children: ReactNode;
}

export default function Modal({
  onCallback,
  onToggle,
  title,
  children,
}: Props): JSX.Element {
  const handleCloseModal = () => {
    if (!!onCallback) onCallback();

    onToggle(false);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3>{title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => onToggle(false)}
              >
                <span className="bg-transparent text-black opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none hover:opacity-100 duration-200 leading-none">
                  ×
                </span>
              </button>
            </div>
            <div className="relative px-6">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                {children}
              </p>
            </div>
            <div className="flex items-center justify-end px-6 py-4 border-t border-solid border-slate-200 rounded-b">
              <Button onClick={handleCloseModal}>Close</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
