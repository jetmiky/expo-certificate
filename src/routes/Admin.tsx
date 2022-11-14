import { Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div>
      <h1>This is Admin Page</h1>

      <p>Outlet goes below.</p>
      <Outlet />
    </div>
  );
}
