// Router
import { Outlet } from "react-router-dom";

// Components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Admin() {
  return (
    <div className="min-h-screen w-full flex items-center justify-between flex-col">
      <header>
        <Header />
        <h1 className="text-center text-xl mt-3">ADMINISTRATOR</h1>
      </header>

      <Outlet />

      <Footer />
    </div>
  );
}
