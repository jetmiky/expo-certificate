import { lazy, Suspense } from "react";

// Configs
import initializeIcon from "./config/icons";

// Router
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./routes/Home";
const Admin = lazy(() => import("./routes/Admin"));

initializeIcon();

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="/admin/*"
        element={
          <Suspense fallback={<p>Loading ...</p>}>
            <Admin />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
