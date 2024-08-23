import { Link } from "react-router-dom";
import Slider from "../ui/Slider";

export default function Home() {
  return (
    <div className="flex h-full animate-fade-in items-center justify-center text-black">
      <div>
        <img
          className="max-w-[28rem] rounded-3xl"
          src="home.jpeg"
          alt="Mistwood branch"
        />
      </div>
      <div>
        <div className="z-50 flex min-h-72 max-w-[40rem] -translate-x-10 rounded-3xl border border-dark bg-white bg-opacity-40 text-center transition-all duration-200 hover:scale-[101%] hover:ring-1 hover:ring-dark">
          <Slider />
        </div>
        <div className="-translate-x-10 text-center">
          <Link
            className="mt-4 inline-block rounded-3xl bg-tertiary px-3 py-2 font-semibold uppercase text-dark transition-all duration-200 visited:scale-105 hover:scale-105 hover:shadow-md active:scale-100"
            to="/signup"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
