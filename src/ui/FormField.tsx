import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegister,
} from "react-hook-form";

interface FormField {
  labelText: string;
  name: string;
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  options?: FieldOptions;
  error:
    | string
    | FieldError
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}
interface FieldOptions {
  required: boolean;
}

export default function FormField({
  labelText,
  name,
  type,
  register,
  options,
  error,
}: FormField) {
  return (
    <div className="text-xl">
      <label className="flex items-center justify-center gap-4">
        <span className="basis-48">{labelText}</span>
        <input
          {...register(name, options)}
          className="basis-96 rounded-3xl border-0 border-dark bg-primary px-3 py-1 text-center ring-0"
          type={type}
        />
      </label>
      <p className="text-center">{error as string}</p>
    </div>
  );
}
