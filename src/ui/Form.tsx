import { FormEventHandler, ReactNode } from "react";

interface Form {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  isReadyToSubmit: boolean;
}

export default function Form({ children, onSubmit, isReadyToSubmit }: Form) {
  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        {children}
        <button
          className={`inline-block min-w-[10rem] self-center rounded-3xl px-3 py-1 text-xl duration-200 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-dark disabled:text-opacity-40 ${!isReadyToSubmit ? "pointer bg-secondary text-slate-100 hover:scale-105 active:scale-100" : ""}`}
          disabled={isReadyToSubmit}
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}
