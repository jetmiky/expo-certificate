import { useState } from "react";

// Configs
import initializeIcon from "./config/icons";

// Router
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./routes/Home";
import Admin from "./routes/Admin";
import AdminLogin from "./routes/Admin/Login";
import AdminDashboard from "./routes/Admin/Dashboard";

// Components
import PrivateRoute from "./components/PrivateRoute";

initializeIcon();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />}>
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
