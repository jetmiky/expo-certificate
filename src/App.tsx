// Configs
import initializeIcon from "./config/icons";

// Router
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./routes/Home";
import Admin from "./routes/Admin";
import AdminLogin from "./routes/Admin/Login";

initializeIcon();

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />}>
        <Route path="/admin/login" element={<AdminLogin />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
