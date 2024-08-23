import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    to: "about",
    value: "About",
  },
  {
    to: "account",
    value: "Account",
  },
  {
    to: "branches",
    value: "Branches",
  },
  {
    to: "loans",
    value: "Loans",
  },
  {
    to: "cards",
    value: "Cards",
  },
];

export default function NotAuthenticatedNavbar() {
  const { pathname } = useLocation();

  return (
    <nav className="flex justify-around text-xl">
      <ul className="flex gap-4">
        {navLinks.map((link, i) => (
          <li key={i}>
            <Link
              className={`${pathname === `/${link.to}` ? "scale-105 shadow-md ring-2 ring-slate-50" : ""} mt-4 inline-block rounded-2xl bg-primary px-3 py-2 font-semibold uppercase text-slate-100 transition-all duration-200 visited:scale-105 hover:scale-105 hover:ring-2 hover:ring-slate-50 active:scale-100 active:shadow-md active:ring-2 active:ring-slate-50`}
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
