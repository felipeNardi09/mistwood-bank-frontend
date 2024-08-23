import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center bg-dark text-lg text-slate-100">
      <div className="flex gap-4">
        <p>
          Created by Felipe Nardi. Check my{" "}
          <span>
            <Link
              className="rounded-3xl bg-white px-3 py-1 font-semibold text-black transition-all duration-200 hover:bg-slate-100"
              to="https://www.linkedin.com/in/felipe-nardi/"
            >
              Linkedin
            </Link>
          </span>{" "}
          page.
        </p>
      </div>
    </footer>
  );
}
