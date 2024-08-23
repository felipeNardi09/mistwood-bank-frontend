import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function NotAuthenticatedLayout() {
  return (
    <div className="grid h-dvh grid-rows-[1.2fr_5fr_.4fr]">
      <Header />

      <Main>{<Outlet />}</Main>

      <Footer />
    </div>
  );
}
