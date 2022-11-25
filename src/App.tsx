// Configs
import initializeIcon from "./config/icons";

// Router
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./routes/Home";
import Admin from "./routes/Admin";

initializeIcon();

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
