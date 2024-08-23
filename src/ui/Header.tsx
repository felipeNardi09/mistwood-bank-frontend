import AuthNavbar from "./AuthNavbar";
import Logo from "./Logo";
import NotAuthenticatedNavbar from "./NotAuthenticatedNavbar";

export default function Header() {
  return (
    <header className="flex items-center justify-around bg-dark">
      <div className="flex items-center gap-4">
        <Logo />
        <NotAuthenticatedNavbar />
      </div>
      <div>
        <AuthNavbar />
      </div>
    </header>
  );
}
