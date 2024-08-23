import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotAuthenticatedLayout from "./ui/NotAuthenticatedLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Account from "./pages/Account";
import Loans from "./pages/Loans";
import Cards from "./pages/Cards";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Branches from "./pages/Branches";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<NotAuthenticatedLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="account" element={<Account />} />
              <Route path="branches" element={<Branches />} />
              <Route path="loans" element={<Loans />} />
              <Route path="cards" element={<Cards />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
