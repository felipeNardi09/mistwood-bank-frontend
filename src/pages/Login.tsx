import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Form from "../ui/Form";
import FormField from "../ui/FormField";

const schema = z.object({
  email: z
    .string({
      required_error: "E-mail is required",
      invalid_type_error: "E-mail must be a string",
    })
    .email({ message: "Invalid e-mail adress" }),
  password: z
    .string()
    .min(8, {
      message: "Password must contain at least 8 characters",
    })
    .max(12, { message: "Password can not contain more than 12 characters" }),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ resolver: zodResolver(schema) });

  const email = watch("email");
  const password = watch("password");

  const isReadyToSubmit = email && password ? true : false;

  return (
    <div className="flex h-full animate-fade-in items-center justify-center text-black">
      <div className="min-w-[30rem] rounded-2xl border border-dark bg-dark bg-opacity-90 p-2 text-slate-200 shadow-md">
        <Form
          onSubmit={handleSubmit((data) => console.log(data))}
          isReadyToSubmit={!isReadyToSubmit}
        >
          <FormField
            register={register}
            labelText="E-mail"
            type="email"
            name="email"
            error={errors.email?.message}
          />

          <FormField
            register={register}
            labelText="Password"
            type="password"
            name="password"
            error={errors.password?.message}
          />
        </Form>
      </div>
    </div>
  );
}
