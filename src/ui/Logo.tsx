import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link to="/home">
        <img
          className="m-2 h-28 w-28 rounded-xl"
          src="/logo.jpeg"
          alt="The Mistwood bank logo."
        />
      </Link>
    </div>
  );
}
