import { useForm } from "react-hook-form";
import FormField from "../ui/FormField";
import Form from "../ui/Form";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
      role: "",
    },
  });
  const isReadyToSubmit = watch([
    "name",
    "email",
    "password",
    "confirmPassword",
    "dateOfBirth",
    "role",
  ]).includes("");

  return (
    <div className="flex h-full animate-fade-in items-center justify-center">
      <div className="min-w-[36rem] rounded-2xl border border-dark bg-dark bg-opacity-90 p-2 text-slate-200 shadow-md">
        <Form
          onSubmit={handleSubmit((data) => console.log(data))}
          isReadyToSubmit={isReadyToSubmit}
        >
          <FormField
            register={register}
            labelText="Name"
            type="text"
            name="name"
            error={errors.name?.message}
          />

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
          <FormField
            register={register}
            labelText="Confirm Password"
            type="password"
            name="confirmPassword"
            error={errors.confirmPassword?.message}
          />
          <FormField
            register={register}
            labelText="Date of birth"
            type="Date"
            name="dateOfBirth"
            error={errors.dateOfBirth?.message}
          />
          <FormField
            register={register}
            labelText="Role"
            type="text"
            name="role"
            error={errors.role?.message}
          />
        </Form>
      </div>
    </div>
  );
}
