import { Link } from "react-router-dom";

const authLinks = [
  {
    to: "login",
    value: "Login",
  },
  {
    to: "signup",
    value: "Sign up",
  },
];

export default function AuthNavbar() {
  return (
    <nav>
      <ul className="flex gap-4 text-xl">
        {authLinks.map((link, i) => (
          <li key={i}>
            <Link
              className="mt-4 inline-block rounded-2xl bg-primary px-3 py-2 font-semibold uppercase text-slate-100 transition-all duration-200 visited:scale-105 hover:scale-105 hover:ring-2 hover:ring-slate-50 active:scale-100 active:shadow-md active:ring-2 active:ring-slate-50"
              to={link.to}
            >
              {link.value}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
