// Router
import { Navigate, Routes, Route, Outlet } from "react-router-dom";

// Components
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PrivateRoute from "../components/PrivateRoute";

// Contexts
import AuthProvider from "../context/auth/AuthProvider";

// Pages
import Login from "./Admin/Login";
import Dashboard from "./Admin/Dashboard";

export default function Admin() {
  return (
    <AuthProvider>
      <div className="min-h-screen w-full flex items-center justify-between flex-col">
        <header>
          <Header />
          <h1 className="text-center text-xl mt-3">ADMINISTRATOR</h1>
        </header>

        <Routes>
          <Route index element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Outlet />

        <Footer />
      </div>
    </AuthProvider>
  );
}
