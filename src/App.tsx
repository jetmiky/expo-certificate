import { useEffect, useState } from "react";

// Configs
import initializeIcon from "./config/icons";

// APIs
import { setAPIAuthorization } from "./config/api";
import { auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";

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
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // onAuthStateChanged(auth, async (user) => {
    //   if (!!user) {
    //     const token = await user.getIdToken();
    //     setAPIAuthorization(token);
    //   }
    //   return setIsAuthenticated(!!user);
    // });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />}>
        <Route index element={<AdminLogin />} />
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
